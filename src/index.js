import { h, render, Component } from 'preact';
import styled from 'preact-emotion';

const Title = styled.h1``;

function App() {
  return <Title>Parcel Preact Starter Kit</Title>;
}

render(<App />, document.getElementById('root'));
