import { StyleSheet, View, TextInput, Button } from 'react-native';
import  {useState} from'react';
import { API_user } from '../../API';

const Them = (props) => {
    const {navigation: nav, route} = props;
    const editData = route.params?.editData;
    
    const [name,setName]=useState('');
    const [id,setId] =useState('');
    const [address,setAddress] =useState('');
    const [phone,setPhone] =useState('');
    const [image,setImage] =useState('');
    const [status,setStatus] =useState('');

    // const nav = props.navigation;

    // useEffect(() => {
    //     if (editData) {
    //         setName(editData.name);
    //         setId(editData.id);
    //         setAddress(editData.address);
    //         setPhone(editData.phone);
    //         setImage(editData.image);
    //         setStatus(editData.setStatus);
    //     }
    // }, [editData?.id]);

    const onAdd =()=>{
        const newObject ={
            name,
            id,
            address,
            phone,
            image,
            status
        }; fetch(
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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Tên Cửa Hàng"  
              
                onChangeText={(text)=>setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="ID"
              
                onChangeText={(text)=>setId(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Địa Chỉ"
              
                onChangeText={(text)=>setAddress(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                
                onChangeText={(text)=>setPhone(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Link ảnh logo"
               
                onChangeText={(text)=>setImage(text)}
            />
             <TextInput
                style={styles.input}
                placeholder="Trạng thái"
                
                onChangeText={(text)=>setStatus(text)}
            />

            <Button
                title="Thêm"
                color="#000000"
                onPress={() => onAdd()}
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
        margin: 10,
        height: 40,
        width: 300,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 5,
    }
  });
  
export default Them;
