import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Text, Modal, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from './styles';

const ModalComp: React.FC = () => {
  const modalStatus = true;

  return (
    <Modal animationType="fade" transparent visible={modalStatus}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      >
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#232129',
            borderRadius: 15,
            width: 300,
            height: 150,
            alignItems: 'center',
            elevation: 20,
          }}
        >
          {/* <Container> */}
          <Text style={{ color: 'white' }}>Escolha o que deseja fazer</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style>
              <Text style={{ color: 'white' }}>Deletar</Text>
              <Icon name="trash" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={{ color: 'white' }}>Atualizar</Text>
              <Icon name="file" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          {/* </Container> */}
        </View>
      </View>
    </Modal>
  );
};

export default ModalComp;
