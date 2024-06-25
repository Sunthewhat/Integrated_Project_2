import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:dio/dio.dart';

class BookTrade {
  static Future<BaseResponse<Null>> bookTrade(int traderId) async {
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
        '${EnvironmentConstant.baseUrl}/trade/book',
        data: {
          'userId': userId,
          'traderId': traderId,
        },
      );
      var response = BaseResponse<Null>.fromJson(res.data, (data) => null);
      return response;
    } catch (e) {
      return BaseResponse<Null>(
        success: false,
        message: 'Book Trade Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
