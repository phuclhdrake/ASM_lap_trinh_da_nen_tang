import { StyleSheet, Text, FlatList, Button, Image } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { useState } from "react";
import { API_user } from "../../API";

const StoreItem = (props) => {
    const[isLoading,setIsLoading]=useState(true);
    const[newList,setNewList] =useState([]);
    const item =props.data;
    const navigation =useNavigation();
    
    const getUser =()=>{
        fetch(API_user)
        .then(res=>res.json())
        .then(data=>{
            setIsLoading(false);
            setNewList(data);
        }).catch(err =>{
            console.log(err);
        })
    }
    const onDelete =(id)=>{
        fetch(`${API_user}/${id}`,{
            method:'DELETE',
        })
        .then(Response=> getUser())
    }
    const onEdit =(editId)=>{
        fetch(`${API_user}/${editId}`)
        .then(res=>res.json())
        .then(data=>navigation.navigate('Sua',{editData:data}))
    }

    return (
        <>
            <Text>Tên cửa hàng: {item.name}</Text>
            <Text>ID: {item.storeID}</Text>
            <Text>Địa chỉ: {item.address}</Text>
            <Text>Số điện thoại: {item.storePhoneNumber}</Text>
            <Text>Trạng thái: {item.storeStatus}</Text>
            <Image source={
                {uri: item.Image}
            }
                style={styles.storeLogo}
            />
            <Button
                title="Xóa"
                onPress={()=>onDelete(item.id)}
            />
            <Button
                title="Sửa"
                onPress={() => onEdit(item.id)}

            />
        </>
    );
}

const List = (props) => {
    const list = props.data || {};

    return (
        <FlatList
            data={list}
            renderItem={({ item }) => <StoreItem data={item} />} 
            keyExtractor={(item) => item.storeID}
        />
    );
}

const styles = StyleSheet.create({
    storeLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default List;