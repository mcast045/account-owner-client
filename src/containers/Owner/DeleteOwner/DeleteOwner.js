import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as repositoryActions from '../../../Store/actions/repositoryActions';
import * as errorHandlerActions from '../../../Store/actions/errorHandlerActions';
import SuccessModal from '../../../components/Modals/SuccessfulModal/SuccessfulModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';
import { Well, Button, Col, Row, ControlLabel } from 'react-bootstrap';
import Moment from 'react-moment';


const DeleteOwner = (props) => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.repository.data);
    const showSuccessModal = useSelector(state => state.repository.showSuccessModal);
    const showErrorModal = useSelector(state => state.errorHandler.showErrorModal);
    const errorMessage = useSelector(state => state.errorHandler.errorMessage);

    let owner = { ...data };

    useEffect(() => {
        const id = props.match.params.id;
        const url = '/api/owner/' + id;
        dispatch(repositoryActions.getData(url, { ...props }));
    }, []);

    const deleteOwner = (event) => {
        event.preventDefault();

        const url = 'api/owner/' + data.id;
        dispatch(repositoryActions.deleteData(url, { ...props }));
    }

    const redirectToOwnerList = () => {
        props.history.push('/owner-list');
    }

    return (
        <Fragment>
            <Row>
                <Col md={10}>
                    <Well>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='name'>Owners name:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='name'>{owner.name}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='dateOfBirth'>Date of birth:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='dateOfBirth'><Moment format="MM/DD/YYYY">{owner.dateOfBirth}</Moment></span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <ControlLabel htmlFor='address'>Address:</ControlLabel>
                            </Col>
                            <Col md={7}>
                                <span name='address'>{owner.address}</span>
                            </Col>
                        </Row>
                    </Well>
                </Col>
            </Row>
            <Row>
                <Col mdOffset={8} md={1}>
                    <Button type="submit" bsStyle="info" onClick={deleteOwner}>Delete</Button>
                </Col>
                <Col md={1}>
                    <Button bsStyle='danger' onClick={redirectToOwnerList}>Cancel</Button>
                </Col>
            </Row>
            <SuccessModal show={showSuccessModal} modalHeaderText={'Success message'}
                modalBodyText={'Action completed successfylly'}
                okButtonText={'OK'}
                successClick={() => dispatch(repositoryActions.closeSuccessModal({ ...props }, '/owner-List'))} />
            <ErrorModal show={showErrorModal} modalHeaderText={'Error message'}
                modalBodyText={errorMessage}
                okButtonText={'OK'}
                closeModal={() => dispatch(errorHandlerActions.closeErrorModal())} />
        </Fragment>
    );
}

export default DeleteOwner;