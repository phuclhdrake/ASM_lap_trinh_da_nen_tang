import { StyleSheet, View, Text, Image, Button } from "react-native";

const Thongtincanhan = (props) => {
    const nav = props.navigation;
    return (
        <View>
            <Image
                style={styles.picture}
                source={{
                    uri: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/321117290_1279617352601570_1286791866500304638_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=54TC4DpWjRgAX-n8zQT&_nc_ht=scontent.fhan2-3.fna&oh=00_AfD91Y8rdycR6_2lqzKidJVFelUX4nOAf4IzbT9_r5iPrg&oe=63ED7488",
                  }}
            />     
            <Text style={styles.chu} >Họ và tên: Lê Hồng Phúc</Text>
            <Text style={styles.chu} >Mã sinh viên: PH20309</Text>
                <View style={styles.nut} > 
                <Button
                title="Quản Lí Cửa Hàng"
                onPress={() => nav.navigate("qlcuahang")}
            />
                </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    picture: {
        height: 200, 
        width: 200,
        alignSelf: "center",
        alignContent: "center",
    },
    chu: {
        marginTop: 20,
        alignSelf: "center",
    },
    nut:{
        borderWidth: 2,
        width: 200,
        alignSelf: "center",
        marginTop: 20,
      }
});

export default Thongtincanhan;
