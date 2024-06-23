import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:dio/dio.dart';

class UpdateUser {
  static Future<BaseResponse<Null>> update({
    required String username,
    required String firstname,
    required String lastname,
    required String email,
    required String nameTitle,
    required String expectedMonthly,
  }) async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<Null>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      Response res = await Dio().post(
        '${EnvironmentConstant.baseUrl}/user/update/data',
        data: {
          'userId': userId,
          'username': username,
          'firstname': firstname,
          'lastname': lastname,
          'email': email,
          'nameTitle': nameTitle,
          'expectedMonthly': expectedMonthly,
        },
      );
      var response = BaseResponse<Null>.fromJson(res.data, (data) => null);
      return response;
    } catch (e) {
      return BaseResponse<Null>(
        success: false,
        message: 'Update User Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
