/* eslint-disable no-console */
import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import moment from 'moment';

import { UserContext } from '../../components/Providers/userProvider';
import { WaitingContext } from '../../components/Providers/waitingProvider';
import { ToastContext } from '../../components/Providers/toastProvider';

import userApi from '../../apis/userApi';

import cls from '../LeaderBoard/style.module.scss';

const History = () => {
  let { user } = useContext(UserContext);
  let { setIsWaiting } = useContext(WaitingContext);
  let [historys, setHistorys] = useState([]);
  let { toast } = useContext(ToastContext);

  const fetchData = async () => {
    try {
      let {
        status,
        data: { historys },
      } = await userApi.getHistory(user._id);

      if (status !== 'success' || !historys) {
        throw new Error('Có lỗi xảy ra');
      }

      setHistorys(currentHistorys => historys);
      setIsWaiting(currentIsWaiting => false);
    } catch (error) {
      toast.error('Không tải được dữ liệu, vui lòng thử lại');
      setIsWaiting(currentIsWaiting => false);
      return;
    }
  };

  useEffect(() => {
    setIsWaiting(currentIsWaiting => true);
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="col-md-8 offset-md-2 d-flex align-items-center">
          <div className={cls.leaderBoard}>
            <Table className="text-white">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Avatar</th>
                  <th>Tên</th>
                  <th>Tốc độ (Wpm)</th>
                  <th>Tỷ lệ sai (Accuracy)</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {historys.map((item, key) => (
                  <tr key={key}>
                    <th>{key + 1}</th>
                    <th>
                      <div
                        className={cls.avatar}
                        style={{ backgroundImage: `url(${user.avatar})` }}
                      ></div>
                    </th>
                    <th>{user.name}</th>
                    <th>{item.score}</th>
                    <th>{item.accuracy}</th>
                    <th>{moment(item.dateCreate).fromNow()}</th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
