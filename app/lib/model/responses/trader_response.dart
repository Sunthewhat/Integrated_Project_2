class TraderResponse {
  int traderId;
  double percentage;
  int amount;
  String companyName;

  TraderResponse({
    required this.traderId,
    required this.percentage,
    required this.amount,
    required this.companyName,
  });

  factory TraderResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return TraderResponse(
        traderId: 0,
        percentage: 0.0,
        amount: 0,
        companyName: '',
      );
    }
    return TraderResponse(
      traderId: json['traderId'],
      percentage: (json['percentage'] is int)
          ? (json['percentage'] as int).toDouble()
          : json['percentage'],
      amount: json['amount'],
      companyName: json['companyName'],
    );
  }
}

class TradersResponse {
  final List<TraderResponse> traders;
  TradersResponse({
    required this.traders,
  });

  factory TradersResponse.fromJson(List<dynamic>? json) {
    if (json == null) {
      return TradersResponse(traders: []);
    }
    List<TraderResponse> traders =
        json.map((traderJson) => TraderResponse.fromJson(traderJson)).toList();
    return TradersResponse(traders: traders);
  }
}
