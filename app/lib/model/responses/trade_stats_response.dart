// ignore_for_file: non_constant_identifier_names

class TradeStatsResponse {
  double January;
  double February;
  double March;
  double April;
  double May;
  double June;
  double July;
  double August;
  double September;
  double October;
  double November;
  double December;

  TradeStatsResponse({
    required this.January,
    required this.February,
    required this.March,
    required this.April,
    required this.May,
    required this.June,
    required this.July,
    required this.August,
    required this.September,
    required this.October,
    required this.November,
    required this.December,
  });

  factory TradeStatsResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return TradeStatsResponse(
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      );
    }
    return TradeStatsResponse(
      January: double.parse(json['January'].toString()),
      February: double.parse(json['February'].toString()),
      March: double.parse(json['March'].toString()),
      April: double.parse(json['April'].toString()),
      May: double.parse(json['May'].toString()),
      June: double.parse(json['June'].toString()),
      July: double.parse(json['July'].toString()),
      August: double.parse(json['August'].toString()),
      September: double.parse(json['September'].toString()),
      October: double.parse(json['October'].toString()),
      November: double.parse(json['November'].toString()),
      December: double.parse(json['December'].toString()),
    );
  }
  double getValueForMonth(int monthIndex) {
    switch (monthIndex) {
      case 0:
        return January;
      case 1:
        return February;
      case 2:
        return March;
      case 3:
        return April;
      case 4:
        return May;
      case 5:
        return June;
      case 6:
        return July;
      case 7:
        return August;
      case 8:
        return September;
      case 9:
        return October;
      case 10:
        return November;
      case 11:
        return December;
      default:
        return 0;
    }
  }
}
