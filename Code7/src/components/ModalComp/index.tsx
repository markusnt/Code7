import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import { Text, Modal, View, TouchableOpacity } from 'react-native';

import { IState } from '../../store';
import { Container, CloseView } from './styles';

import { modalCallClose } from '../../store/modules/modal/actions';
import { newsDelete } from '../../store/modules/news/actions';

const ModalComp: React.FC = () => {
  const dispatch = useDispatch();

  const Modalstatus = useSelector<IState, boolean>((state) => {
    return state.modal.status;
  });
  const dataItem = useSelector<IState, any>((state) => {
    return state.modal.data;
  });

  const closeModal = () => {
    return dispatch(modalCallClose());
  };

  const delteNews = () => {
    dispatch(modalCallClose());
    return dispatch(newsDelete(dataItem.id));
  };

  return (
    <Modal animationType="fade" transparent visible={Modalstatus}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#232129',
            borderRadius: 15,
            width: 100,
            height: 100,
            alignItems: 'center',
            elevation: 20,
            margin: 10,
          }}
          onPress={() => delteNews()}
        >
          <Icon
            name="trash"
            size={25}
            color="#fff"
            style={{ paddingBottom: 10 }}
          />
          <Text style={{ color: 'white' }}>Deletar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#232129',
            borderRadius: 15,
            width: 100,
            height: 100,
            alignItems: 'center',
            elevation: 20,
            margin: 10,
          }}
        >
          <Icon
            name="file"
            size={25}
            color="#fff"
            style={{ paddingBottom: 10 }}
          />
          <Text style={{ color: 'white' }}>Atualizar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            backgroundColor: '#232129',
            borderRadius: 15,
            width: 100,
            height: 100,
            alignItems: 'center',
            elevation: 20,
            margin: 10,
          }}
          onPress={() => closeModal()}
        >
          <Icon name="x" size={25} color="#fff" style={{ paddingBottom: 10 }} />
          <Text style={{ color: 'white' }}>Cancelar</Text>
        </TouchableOpacity>
        {/* </Container> */}
      </View>
    </Modal>
  );
};

export default ModalComp;
