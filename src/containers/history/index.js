import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import moment from 'moment';

import { UserContext } from '../../components/providers/userProvider';
import userApi from '../../apis/userApi';

const History = () => {
    let { user } = useContext(UserContext);
    let [historys, setHistorys] = useState([]);

    useEffect(() => {
        userApi.getHistory(user._id).then(res => {
            let { status, data: { historys } } = res;

            if (status !== 'success' || !historys) {
                throw new Error('Có lỗi xảy ra');
                return
            }

            setHistorys(currentHistorys => historys);
        }).catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col className="col-md-8 offset-md-2 d-flex align-items-center">
                    <div className="leaderBoard">
                        <Table className="text-white">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Avatar</th>
                                    <th>Tên</th>
                                    <th>Tốc độ (Wpm)</th>
                                    <th>Thời gian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    historys.map((item, key) => (
                                        <tr>
                                            <th>{key + 1}</th>
                                            <th><div className="avatar rounded-circle" style={{backgroundImage: `url(${user.avatar})`}}></div></th>
                                            <th>{user.name}</th>
                                            <th>{item.score}</th>
                                            <th>{moment(item.dateCreate).fromNow()}</th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default History;