import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {

  // const imageSource = selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  // if we remove the uri from {uri: selectedImage} and write the condition like selectedImage !== null ? selectedImage : placeholderImageSource; it doesn't work.
  const imageSource = selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
  console.log("THIS IS THE URI -> ", selectedImage);
  console.log("THIS IS THE placeholder -> ", placeholderImageSource);

  return <Image
    source={imageSource}
    style={styles.image}
  />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
