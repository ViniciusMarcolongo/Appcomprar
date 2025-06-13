import { useState } from 'react';
import { View, Image, TouchableOpacity, Text, FlatList} from 'react-native';

import {Button} from '@/components/Button';
import {Input} from '@/components/Input';
import {Filter} from '@/components/Filter';
import { Item } from '@/components/Item';

import { styles } from './styles';
import {FilterStatus} from '@/types/FilterStatus';


const FILTER_STATUS:FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = Array.from({length: 10}).map((_, index) =>String(index))

export function Home() {
 const [filter, setFilter] = useState(FilterStatus.PENDING)

  return (
    <>
      <View style = {styles.container}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        
        <View style={styles.form}>
          <Input placeholder='O que deseja adquirir?' />
          <Button title='Entrar' />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>

            {FILTER_STATUS.map((status) => (
              <Filter 
              key={status} 
              status={status} 
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
            ))}

            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearText}>Limpar</Text>
            </TouchableOpacity>
          </View>

          

            <FlatList
              data={ITEMS}
              keyExtractor={(item) => item}
              renderItem={({item})=> (
                <Item 
                  data={{status: FilterStatus.DONE, description: "Café"}}
                  onStatus={() => {}}
                  onRemove={() => {}}
                />
              )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            contentContainerStyle={styles.listContent}
            ListEmptyComponent={() => <Text style={styles.empty}> Nenhum item aqui.</Text>}

            />
         
        </View>

      </View>
    </>
  )
}

