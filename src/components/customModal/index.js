import React, { useState, useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, FormGroup, Input } from 'reactstrap';

import userApi from '../../apis/userApi';
import { UserContext } from '../providers/userProvider';


const CustomModal = ({ isModal, toggle, score }) => {
    let { setUser } = useContext(UserContext);
    let [name, setName] = useState('');
    let [file, setFile] = useState(null);

    const onsubmit = () => {
        let formData = new FormData();
        
        formData.append('name', name);
        formData.append('avatar', file);
        formData.append('score', score);

        userApi.postCreate(formData).then(res => {
            debugger;
            let { status, data: { user } } = res;

            if(status !== 'success' || !user) {
                throw new Error('Có lỗi xảy ra');
                return;
            }

            // Set user
            toggle();
            setUser(currentState => user);
        }).catch(err => console.log(err));
    }

    return (
        <Modal isOpen={isModal} toggle={toggle}>
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
                    <FormGroup>
                        <Label for="avatar">Ảnh đại diện</Label>
                        <Input
                            id="avatar"
                            type="file"
                            name="avatar"
                            onChange={evt => setFile(evt.target.files[0])}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={onsubmit}>Lưu</Button>
                <Button color="danger" onClick={toggle}>Hủy</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CustomModal;

