import { useState ,useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { API_user } from '../../API';

const Sua = (props) => {
    const {navigation :nav ,route} =props;
    const editData =route.params?.editData;
    
    const [name,setName]=useState('');
    const [id,setId] =useState('');
    const [address,setAddress] =useState('');
    const [phone,setPhone] =useState('');
    const [image,setImage] =useState('');
    const [status,setStatus] =useState('');

    useEffect(()=>{
        if(editData){
            setName(editData.name);
            setId(editData.id);
            setAddress(editData.address);
            setPhone(editData.phone);
            setImage(editData.image);
            setStatus(editData.status);

        }
    },[editData?.id]);
    const onSave =()=>{
        const newObject={
            name,
            id,
            address,
            phone,
            image,
            status
        };
        fetch(
            !editData?API_user:`${API_user}/${editData.id}`,
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                method: !editData ? 'POST' : 'PUT',
                body: JSON.stringify(newObject),
            }

   )
            .then((response)=>nav.goBack());
        

    }
    return (
        <View  style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên Cửa Hàng"
                value={name}
                onChangeText={(text)=>setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="ID"
                value={id}
                onChangeText={(text)=>setId(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Địa Chỉ"
                value={address}
                onChangeText={(text)=>setAddress(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                value={phone}
                onChangeText={(text)=>setPhone(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Link ảnh logo"
                value={image}
                onChangeText={(text)=>setImage(text)}
            />
             <TextInput
                style={styles.input}
                placeholder="Trạng thái"
                value={status}
                onChangeText={(text)=>setStatus(text)}
            />

            <Button
                title="Sửa"
                color="#000000"
                onPress={() => onSave()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

    input: {
        height: 40,
        width: 200,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    input: {
        margin: 10,
        height: 40,
        width: 300,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
    }
});

export default Sua;