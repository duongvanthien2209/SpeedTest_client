import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import moment from 'moment';

import userApi from '../../apis/userApi';

const LeaderBoard = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userApi.getLeaderBoard().then(res => {
            // debugger;
            let { status, data: { users } } = res;

            if (status !== 'success' || !users) {
                throw new Error('Có lỗi xảy ra');
                return
            }

            setUsers(currentState => users);
        }).catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Row>
                <Col className="col-md-8 offset-md-2 d-flex align-items-center">
                    <div className="leaderBoard">
                        <Table className="text-white table-striped">
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
                                    users.map((item, key) => {
                                        return (
                                            <tr>
                                                <th >{key + 1}</th>
                                                <th>
                                                    {/* <img className="avatar" src={item.avatar} /> */}
                                                    <div className="avatar rounded-circle" style={{backgroundImage: `url(${item.avatar})`}}></div>
                                                </th>
                                                <th>{item.name}</th>
                                                <th>{item.score}</th>
                                                <th>{moment(item.dateCreate).fromNow()}</th>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LeaderBoard;