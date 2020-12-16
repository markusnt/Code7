import React, { useCallback, useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';

import { View, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { FlatList } from 'react-native-gesture-handler';
import { cs } from 'date-fns/esm/locale';
import { IState } from '../../store';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  BackToSignIn,
  BackToSignInText,
  Content,
  NewsContainer,
} from './styles';

import Input from '../../components/Input';
import News from '../../components/News';
import ModalComp from '../../components/ModalComp';

interface NewsSearch {
  search: string;
}

const Main: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { newsData } = useSelector<IState, string>((state) => {
    return state.news;
  });

  const [newsFilterData, setNewsFilterData] = useState(newsData);
  const [search, setSearch] = useState('');

  console.log(search);
  const filterNews = (text: string) => {
    setSearch(text);
    const newData = newsData.filter((item: any) => {
      const itemData = `${item.title}`;
      const textData = search;
      return itemData.indexOf(textData) > -1;
    });
    setNewsFilterData(newData);
  };

  const handleSearch = useCallback(
    async (data: NewsSearch) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          search: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await filterNews(data.search);
      } catch (err) {
        return null;
      }
    },
    [search],
  );

  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>Noticias</HeaderTitle>
        </Header>

        <Content>
          <Form ref={formRef} onSubmit={handleSearch}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              name="search"
              icon="search"
              placeholder="Buscar notícia"
              returnKeyType="next"
              onChangeText={(text) => setSearch(text)}
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>

          <FlatList
            data={newsFilterData}
            keyExtractor={(item: any) => item.id}
            style={{ width: '100%' }}
            renderItem={({ item }) => (
              <News
                title={item.title}
                content={item.content}
                autor={item.author}
              />
            )}
          />
        </Content>
      </Container>

      <BackToSignIn onPress={() => navigation.navigate('Register')}>
        <Icon name="plus" size={20} color="#fff" />
        <BackToSignInText>Cadastrar notícia</BackToSignInText>
      </BackToSignIn>
      <ModalComp />
    </>
  );
};

export default Main;
