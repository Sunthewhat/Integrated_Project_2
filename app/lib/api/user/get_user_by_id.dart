import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/get_user_response.dart';
import 'package:dio/dio.dart';

class GetUserById {
  static Future<BaseResponse<GetUserResponse?>> getUserById() async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<GetUserResponse?>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      Response res =
          await Dio().get('${EnvironmentConstant.baseUrl}/user/byId/$userId');
      var response = BaseResponse<GetUserResponse?>.fromJson(
        res.data,
        GetUserResponse.fromJson,
      );
      return response;
    } catch (e) {
      return BaseResponse<GetUserResponse?>(
        success: false,
        message: 'Get User Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
