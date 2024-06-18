import 'package:image_picker/image_picker.dart';

class ImageAPI {
  static Future pickImage(ImageSource source) async {
    final ImagePicker picker = ImagePicker();
    var file = await picker.pickImage(source: source);
    if (file != null) {
      return file;
    }
    return null;
  }
}
