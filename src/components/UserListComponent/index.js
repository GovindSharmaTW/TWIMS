import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useEffect, useState } from "react";

export const UserListComponent = ({selectedItem,searchTerm}) => {

    const tempData =[
        { id: 1, name : 'Govind Sharma', item: 'Laptop', brandName : 'Apple', fromClient:true, clientName:'Apna sweets' },
        { id: 2, name : 'Raj', item: 'Keyboard', brandName : 'Lenovo', fromClient:true, clientName:'FreshPlate'  },
        { id: 3, name : 'Ayush', item: 'Mouse', brandName : 'Logitech', fromClient:false, clientName:'Raj Enterprises'  },
        { id: 4, name : 'Pranav Onkar', item: 'Connector', brandName : 'Logitech', fromClient:true, clientName:'Medanta Hospital'  },
        { id: 5, name : 'Priyesh Barade', item: 'Headphone', brandName : 'HP', fromClient:false, clientName:'Mindshine' },
        { id: 6, name : 'Neeraj Pathak', item: 'Charger', brandName : 'Apple', fromClient:true, clientName:'Luca Plus'  }
    ]

    console.log("searchText Data is",searchTerm);

    useEffect(()=>{
        if(searchTerm)
        {
            handleSearch(searchTerm);

        }
        else
        {
            setItemListData(tempData)
        }
    },[searchTerm])

    const [itemListData, setItemListData] = useState(tempData);
    
      const handleSearch = (text) => {
        // Filter data based on search text
        var filteredData;

        if(itemListData && text)
        {
          filteredData = itemListData.filter((item) =>
            item.name.toLowerCase().includes(text.toLowerCase())
          );
        }
        
        // Update the filtered data
        setItemListData(filteredData);
      };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItemContainer} onPress={()=>selectedItem(item)}>
                <Text style={styles.textStyle}> {item.name}</Text>
                <AntDesign name="right" size={20} color="#000" />
            </TouchableOpacity>
        )
    }

    const renderItemSeparator = () => {
        return (
            <View style={styles.separatorStyle} />
        )
    }

    return (
        <FlatList
            data={itemListData}
            renderItem={(item) => renderItem(item)}
            ItemSeparatorComponent={renderItemSeparator}
            keyExtractor={(item)=>item.id}
        />
    )

}
