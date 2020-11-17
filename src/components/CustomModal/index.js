import React, { useState, useContext } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  Input,
} from 'reactstrap';

import cls from './style.module.scss';

// Images
import beach from '../../assets/images/beach.png';

import userApi from '../../apis/userApi';
import { UserContext } from '../Providers/userProvider';
import { WaitingContext } from '../Providers/waitingProvider';
import { ToastContext } from '../Providers/toastProvider';

const CustomModal = ({ isModal, toggle, score, accuracy }) => {
  let { setUser } = useContext(UserContext);
  let { setIsWaiting } = useContext(WaitingContext);
  let { toast } = useContext(ToastContext);

  let [name, setName] = useState('');
  let [file, setFile] = useState(null);

  const onsubmit = () => {
    // Set waiting
    toggle();
    setIsWaiting(currentIsWaiting => true);

    let formData = new FormData();

    formData.append('name', name);
    formData.append('avatar', file);
    formData.append('score', score);
    formData.append('accuracy', accuracy);

    fetchData(formData);
  };

  const fetchData = async formData => {
    try {
      let {
        status,
        data: { user },
      } = await userApi.postCreate(formData);

      if (status !== 'success' || !user) {
        throw new Error('Có lỗi xảy ra');
      }

      setIsWaiting(currentIsWaiting => false);
      // Thông báo thành công
      toast.success('Bạn đã lưu thành công', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // Set modal default
      setName(currentName => '');
      setFile(curreentFile => null);
      setUser(currentState => user);
    } catch (error) {
      setIsWaiting(currentIsWaiting => false);
      toast.error('Thông tin của bạn chưa được lưu');
      // Set modal default
      setName(currentName => '');
      setFile(curreentFile => null);
      // setUser(currentState => user);
      return;
    }
  };

  return (
    <div>
      <Modal className={cls['custom-modal']} isOpen={isModal} toggle={toggle}>
        <div className={cls['custom-modal__header']}>
          <img src={beach} alt="congrulation" />
          <div className={cls['custom-modal__header__content']}>
            <h4>Chúc mừng bạn</h4>
            <p>
              Bạn đã đạt tốc độ <span>{score} WPM</span>
              <br />
              Tỷ lệ chính xác là <span>{accuracy} %</span>
              <br />
              Tuyệt vời!
            </p>
          </div>
        </div>
        <ModalHeader toggle={toggle}>Hoàn thành</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Tên</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Nhập tên của bạn..."
                value={name}
                onChange={evt => setName(evt.target.value)}
              />
            </FormGroup>
            <div className={cls['custom-modal__form-group']}>
              <p>Ảnh đại diện</p>
              <Label for="avatar">Chọn file</Label>
              <Input
                id="avatar"
                type="file"
                name="avatar"
                onChange={evt => {
                  setFile(evt.target.files[0]);
                }}
                hidden
              />
              <span className="ml-2">
                {file ? file.name : 'Bạn chưa chọn ảnh'}
              </span>
            </div>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onsubmit}>
            Lưu
          </Button>
          <Button color="danger" onClick={toggle}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CustomModal;
