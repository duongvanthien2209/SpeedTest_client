import React, { useContext } from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import moment from 'moment';

import { UserContext } from '../../components/providers/userProvider';

const History = () => {
    let { user } = useContext(UserContext);

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
                                    user.history.map((item, key) => (
                                        <tr>
                                            <th>{key + 1}</th>
                                            <th><img className="avatar" src={`http://localhost:5000/${user.avatar}`} /></th>
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