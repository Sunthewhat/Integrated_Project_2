import 'package:c_trade/constant.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:dio/dio.dart';

class Register {
  static Future<BaseResponse<Null>> register(
      String username,
      String password,
      String nameTitle,
      String fitstname,
      String lastname,
      String email,
      String expectedMonthly) async {
    try {
      Response res = await Dio()
          .post('${EnvironmentConstant.baseUrl}/auth/register', data: {
        'username': username,
        'password': password,
        'nameTitle': nameTitle,
        'fitstname': fitstname,
        'lastname': lastname,
        'email': email,
        'expectedMonthly': expectedMonthly,
      });
      var response = BaseResponse<Null>.fromJson(res.data, null);
      return response;
    } catch (e) {
      return BaseResponse<Null>(
        success: false,
        message: e.toString(),
        data: null,
      );
    }
  }
}
