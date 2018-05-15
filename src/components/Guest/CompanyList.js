import React                from 'react';
import Modal                from 'react-modal';
import {Container, Table}   from "reactstrap";
import {connect}            from  'react-redux';
import {loadCompany} from "../company/action";
import Breadcrumb from "antd/es/breadcrumb/Breadcrumb";

const mapDispatchToProps = function (dispatch) {
    return {
        loadCompany: function () {
            dispatch(loadCompany());
        }
    }
};

const mapStateToProps = function (state) {
    return {
        companies : state.companyReducer,
    }
};

class CourseList extends React.Component {
    componentDidMount() {
        this.props.loadCompany();
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>COMPANIES</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                    <Container>
                        <Table striped>
                            <thead>
                            <tr>
                                <th>STT</th>
                                <th> NAME</th>
                                <th> PHONE MANAGER</th>
                                <th> EMAIL MANAGER</th>
                                <th> NAME MANAGER</th>
                                <th> ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.companies.map((company, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{company.name}</td>
                                    <td>{company.phoneManager}</td>
                                    <td>{company.emailManager}</td>
                                    <td>{company.nameManager}</td>
                                    <td>{company.address}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Container>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)