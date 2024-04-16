import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";

export const ImagePreviewComponent = ({ data, deletedImage, showDeleteButton }) => {

    const [imageData, setImageData] = useState([]);
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setImageData(data);
    }, [data])

    const onLoad = () => {
        setIsImageLoading(false);
    }

    const onError = () => {
        setError(true);
        setIsImageLoading(false);
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <View style={styles.imageContainerStyle}>

                    {isImageLoading &&
                        <ActivityIndicator style={styles.loaderStyle} />
                    }

                    {
                        error ?
                            <Text style={styles.textStyle}>Got error while loading the image</Text>
                            :
                            <Image
                                source={{ uri: item.uri }}
                                style={styles.imageStyle}
                                resizeMode='contain'
                                onLoad={onLoad}
                                onError={onError}
                            />
                    }

                    {showDeleteButton && !isImageLoading && !error &&
                        <TouchableOpacity style={styles.addImageBtn} onPress={() => deletedImage(item)}>
                            <Text style={styles.saveText}>Delete</Text>
                        </TouchableOpacity>
                    }

                </View>
            </View>
        )
    }

    const renderItemSeparator = () => {
        return (
            <View style={styles.separatorStyle} />
        )
    }

    const ListEmptyComponent = () => {
        return (
            <Text style={styles.textNoDataFound}>No Data Found</Text>
        )
    }

    return (
        <FlatList
            data={imageData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={renderItemSeparator}
            ListEmptyComponent={ListEmptyComponent}
        />
    )

}
