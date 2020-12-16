import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Content,
  Title,
  BackToSignIn,
  BackToSignInText,
  Header,
  HeaderTitle,
  BackButton,
} from './styles';

import { newsCreate } from '../../store/modules/news/actions';

interface NewsFormData {
  id: number;
  title: string;
  content: string;
  author: string;
}

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const contentInputRef = useRef<TextInput>(null);
  const authorInputRef = useRef<TextInput>(null);

  const makeid = () => {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);

    return parseInt(rand);
  };

  const handleCreate = useCallback(
    async (data: NewsFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          id: Yup.number(),
          title: Yup.string().required('Titulo obrigatório'),
          content: Yup.string().required('Conteudo obrigatório'),
          author: Yup.string().required('Autor obrigatório'),
        });

        data.id = makeid();

        await schema.validate(data, {
          abortEarly: false,
        });

        await dispatch(newsCreate(data));

        Alert.alert('Cadastro realizado com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Header>
            <BackButton onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>
            <HeaderTitle>Cadastrar notícia</HeaderTitle>
          </Header>

          <Content>
            <Form ref={formRef} onSubmit={handleCreate}>
              <Input
                autoCapitalize="words"
                name="title"
                icon="type"
                placeholder="Titulo"
                returnKeyType="next"
                onSubmitEditing={() => {
                  contentInputRef.current?.focus();
                }}
              />

              <Input
                ref={contentInputRef}
                autoCapitalize="none"
                name="content"
                icon="file-text"
                placeholder="Conteudo"
                returnKeyType="next"
                multiline
                onSubmitEditing={() => {
                  authorInputRef.current?.focus();
                }}
                containerStyle={{ height: 150 }}
              />

              <Input
                ref={authorInputRef}
                autoCapitalize="none"
                name="author"
                icon="user"
                placeholder="Autor"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Button onPress={() => formRef.current?.submitForm()}>
                Criar
              </Button>
            </Form>
          </Content>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Register;
