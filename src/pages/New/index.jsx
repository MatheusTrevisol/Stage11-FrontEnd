import { Container, Form } from './styles';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted));
  }

  function handleBack() {
    navigate(-1);
  }

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  
  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));    
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Por favor, defina um título para a nota.");
    }

    if(newTag) {
      return alert("Você preencheu o campo de Tag porém esqueceu de adiciona-la.");
    }

    if(newLink) {
      return alert("Você preencheu o campo de Link porém esqueceu de adiciona-lo.");
    }
  
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nota cadastrada com sucesso!")
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}></ButtonText>
          </header>

          <Input 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}          
          />

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Link úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={ () => {handleRemoveLink(link)} }
                />
              ))
            }
            <NoteItem 
              $isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={ () => {handleRemoveTag(tag)} }
                  />
                ))
              }
                         
              <NoteItem 
                $isNew 
                placeholder="Nova tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote}/>
        </Form>
      </main>
    </Container>
  )
}