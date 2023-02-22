import { StyleSheet, View, Text, Button } from "react-native";
import StoreList from "./List";
import { FlatList, Pressable, Image } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { API_user } from '../../API';
import { useState ,useEffect} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";


const qlcuahang = (props) => {
    const nav = props.navigation;
    const check = props.route.params?.check;
  // lắng nghe trạng thái khi quay lại màn hình
  const isFocused = useIsFocused();

  const [list, setList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProducts = () => {
    fetch(API_user)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, [isFocused]);
   // mảng rỗng thì chỉ chạy 1 lần duy nhất
   const onEdit = (id) => {
    // gedata with id => send data to form edit
    fetch(`${API_user}/${id}`)
      .then((res) => res.json())
      .then((data) => nav.navigate("Sua", { editData: data }));
  };

  const onDelete = (id) => {
    Alert.alert("Cảnh báo!", "Bạn có chắc chắn muốn XOÁ?", [
      {
        text: "Đồng ý",
        onPress: () => {
          fetch(`${API_user}/${id}`, {
            method: "DELETE",
          }).then((res) => getProducts());
        },
      },
      { text: "Không", onPress: () => {} },
    ]);
  };

    

    return (
        <View>
            <Button 
                title="Thêm Cửa Hàng"
                onPress={() => nav.navigate('Them')}
            />
            
            <FlatList
          data={list}
          renderItem={({ item }) => (
            <View>
              
              <Text>ID: {item.id}</Text>
              <Text>Tên sản phẩm: {item.name}</Text>
              <Text>Địa chỉ: {item.address}</Text>
              <Text>Số ĐT: {item.phone}</Text>
              <Image source={{ uri: item.image }} style={{width:100, height: 100}} />
              <Text>Trạng thái: {item.status}</Text>
              <View
                style={{ flexDirection: "row", marginStart: 20, marginTop: 10 }}
              >
                
                <Button
      style={styles.btn}
        title='Xoa'
        onPress={() => onDelete(item.id)}
      />
      <Button
      style={styles.btn}
        title='sua'
        onPress={() => onEdit(item.id)}
      />
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
            
        </View>
    );
};

export default qlcuahang;