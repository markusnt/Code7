import React from 'react';

import { Text } from 'react-native';

import { NewsContainer } from './styles';

interface NewsProp {
  title: string;
  content: string;
  autor: string;
}

const News: React.FC<NewsProp> = ({ title, autor, content }) => {
  return (
    <NewsContainer>
      <Text style={{ color: '#fff', fontSize: 20 }}>{title}</Text>
      <Text style={{ color: '#fff', textAlign: 'justify' }}>{content}</Text>
      <Text style={{ color: '#fff', fontSize: 16, textAlign: 'right' }}>
        {autor}
      </Text>
    </NewsContainer>
  );
};

export default News;
