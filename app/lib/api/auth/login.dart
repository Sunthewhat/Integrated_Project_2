import 'package:c_trade/constant.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/login_response.dart';
import 'package:dio/dio.dart';

class Login {
  static Future<BaseResponse<LoginResponse?>> login(
    String username,
    String password,
  ) async {
    try {
      Response res =
          await Dio().post('${EnvironmentConstant.baseUrl}/auth/login', data: {
        'username': username,
        'password': password,
      });
      var response = BaseResponse<LoginResponse?>.fromJson(
          res.data, LoginResponse.fromJson);
      return response;
    } catch (e) {
      return BaseResponse<LoginResponse?>(
        success: false,
        message: e.toString(),
        data: null,
      );
    }
  }
}
