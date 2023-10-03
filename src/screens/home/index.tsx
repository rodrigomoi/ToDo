import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { PlusCircle, Trash, Circle, CheckCircle, ClipboardText } from 'phosphor-react-native'
import { styles } from './styles'

export default function Home() {

  interface CardItem {
    isCheckImageChecked: boolean;
    isCheckChecked: boolean;
    text: string;
  }

  const [newTaskText, setNewTaskText] = useState('');
  const [isTextInputFocused, setTestInputFocused] = useState(false)
  const [isCheckChecked, setCheckChecked] = useState(false)
  const [isCheckImageChecked, setCheckImageChecked] = useState(false)
  const [cardData, setCardData] = useState<CardItem[]>([]);
  const [totalCards, setTotalCards] = useState(0);
  const [cardsConcluidos, setCardsConcluidos] = useState(0);

  function EmptyListMessage() {
    return (
      <View style={styles.emptyListContainer}>
        <ClipboardText size={32} color="#808080" weight="fill" />
        <Text style={styles.emptyListText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyListText2}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    );
  }

  function addTarefa() {
    if (newTaskText.trim() === '') {
      return; // Evita adicionar tarefas em branco
    }
  
    const newCardData = [
      ...cardData,
      {
        isCheckImageChecked: false,
        isCheckChecked: false,
        text: newTaskText,
      },
    ];
    setCardData(newCardData);
    setNewTaskText(''); // Limpa o TextInput após adicionar a tarefa

    // Atualiza o total de cards
    setTotalCards(newCardData.length);
  }

  function delTarefa(index: number) {
    const updatedCardData = [...cardData];
    updatedCardData.splice(index, 1);
    setCardData(updatedCardData);

    // Recalculate the number of completed tasks
    const concluidos = updatedCardData.filter((item) => item.isCheckChecked).length;
    setCardsConcluidos(concluidos);
  
    // Atualiza o total de cards
    setTotalCards(updatedCardData.length);
  }

  // Função para alternar o estado isCheckChecked
  const toggleCheck = (index: number) => {
    const updatedCardData = [...cardData];
    updatedCardData[index].isCheckChecked = !updatedCardData[index].isCheckChecked;
    updatedCardData[index].isCheckImageChecked = !updatedCardData[index].isCheckImageChecked;
    setCardData(updatedCardData);
  
    // Atualiza o número de cards concluídos
    const concluidos = updatedCardData.filter((item) => item.isCheckChecked).length;
    setCardsConcluidos(concluidos);
  };

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image}
          source={require('../../images/logo.png')}
        />
      </View>
     
      <View style={styles.form}>
        <TextInput 
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onFocus={() => setTestInputFocused(true)}
          onSubmitEditing={() => setTestInputFocused(false)}
          onEndEditing={() => setTestInputFocused(false)}
          style={[ styles.input, {borderColor: isTextInputFocused == true ? '#5E60CE' : '#262626'},]}
          value={newTaskText}
          onChangeText={(text) => setNewTaskText(text)}
        />

        <TouchableOpacity style={styles.button} onPress={addTarefa}>
          <PlusCircle size={16} color='#FFF'/>
        </TouchableOpacity>
      </View>

      <View style={styles.tipos}>
        <View style={styles.form2}>
          <Text style={styles.textCriadas}>Criadas</Text>
          <TextInput
            style={styles.inputCriadas}
            placeholder={totalCards.toString()} // Total de cards
            placeholderTextColor="#FFF"
            editable={false}
          />
        </View>

        <View style={styles.form2}>
          <Text style={styles.textConcluidas}>Concluídas</Text>
          <TextInput
            style={styles.inputConcluidas}
            placeholder={cardsConcluidos.toString()} // Cards concluídos
            placeholderTextColor="#FFF"
            editable={false}
          />
        </View>
      </View>

      <View style={styles.separador}></View>

      {cardData.length === 0 ? (
        <EmptyListMessage />
      ) : (

        <FlatList
        data={cardData.sort((a, b) => (a.isCheckChecked === b.isCheckChecked ? 0 : a.isCheckChecked ? 1 : -1))}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.cardsContainer}>
              <TouchableOpacity onPress={() => toggleCheck(index)}>
                {item.isCheckImageChecked ? (
                  <CheckCircle size={24} color="#5E60CE" weight="fill" style={styles.check} />
                ) : (
                  <Circle size={24} color='#4EA8DE' style={styles.check} />
                )}
              </TouchableOpacity>
              
              <Text style={[styles.textCard, {textDecorationLine: item.isCheckChecked ? 'line-through' : 'none', color: item.isCheckChecked ? '#808080' : '#F2F2F2' }]}>
                {item.text}
              </Text>

              <TouchableOpacity onPress={() => delTarefa(index)}>
                <Trash size={20} color='#808080' style={styles.trash} />
              </TouchableOpacity>
            </View>
          )}
        />

      )}

    </View>

  )
}