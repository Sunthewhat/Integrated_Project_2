import 'package:c_trade/constant.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/register_response.dart';
import 'package:dio/dio.dart';

class Register {
  static Future<BaseResponse<RegisterResponse?>> register(
      String username,
      String password,
      String nameTitle,
      String firstname,
      String lastname,
      String email,
      String expectedMonthly) async {
    try {
      Response res = await Dio()
          .post('${EnvironmentConstant.baseUrl}/auth/register', data: {
        'username': username,
        'password': password,
        'nameTitle': nameTitle,
        'firstname': firstname,
        'lastname': lastname,
        'email': email,
        'expectedMonthly': expectedMonthly,
      });
      var response = BaseResponse<RegisterResponse?>.fromJson(
          res.data, RegisterResponse.fromJson);
      return response;
    } catch (e) {
      return BaseResponse<RegisterResponse?>(
        success: false,
        message: "Register Error: ${e.toString()}",
        data: null,
      );
    }
  }
}
