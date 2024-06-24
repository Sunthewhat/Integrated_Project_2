import 'package:c_trade/constant.dart';
import 'package:c_trade/local_storage.dart';
import 'package:c_trade/model/base_response.dart';
import 'package:c_trade/model/responses/trader_response.dart';
import 'package:dio/dio.dart';

class GetAvailableTrade {
  static Future<BaseResponse<TradersResponse>> getAvailable() async {
    try {
      String userId = LocalStorage.getUserId() ?? '';
      if (userId.isEmpty) {
        return BaseResponse<TradersResponse>(
          success: false,
          message: 'User not found',
          data: null,
        );
      }
      Response res = await Dio()
          .get('${EnvironmentConstant.baseUrl}/trade/avaliable/$userId');
      var response = BaseResponse<TradersResponse>.fromArrayJson(
        res.data,
        TradersResponse.fromJson,
      );
      return response;
    } catch (e) {
      return BaseResponse<TradersResponse>(
        success: false,
        message: 'Get Available Trade Error: ${e.toString()}',
        data: null,
      );
    }
  }
}
