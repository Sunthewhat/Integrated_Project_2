import 'dart:io';

import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/upload_image_response.dart';
import 'package:dio/dio.dart';

class UploadImage {
  static Future<BaseResponse<UploadImageResponse>> upload(File image) async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<UploadImageResponse>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      FormData data = FormData.fromMap({
        'file': await MultipartFile.fromFile(image.path,
            filename: image.path.split('/').last),
        'userId': userId,
      });
      Response res = await Dio().put(
        '${EnvironmentConstant.baseUrl}/user/update/image',
        data: data,
      );
      var response = BaseResponse<UploadImageResponse>.fromJson(
        res.data,
        UploadImageResponse.fromJson,
      );
      return response;
    } catch (e) {
      return BaseResponse<UploadImageResponse>(
        success: false,
        message: 'Upload Pic Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
