class CertificateResponse {
  String certificateId;
  int amount;
  String unit;
  DateTime date;
  CertificateResponse({
    required this.certificateId,
    required this.amount,
    required this.unit,
    required this.date,
  });
  factory CertificateResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return CertificateResponse(
        certificateId: '',
        amount: 0,
        unit: '',
        date: DateTime.now(),
      );
    }
    return CertificateResponse(
      certificateId: json['certificateId'],
      amount: json['amount'],
      unit: json['unit'],
      date: DateTime.parse(json['date']),
    );
  }
}

class CertificatesResponse {
  final List<CertificateResponse> certificates;
  CertificatesResponse({
    required this.certificates,
  });

  factory CertificatesResponse.fromJson(List<dynamic>? json) {
    if (json == null) {
      return CertificatesResponse(certificates: []);
    }
    List<CertificateResponse> certificates = json
        .map((certificateJson) => CertificateResponse.fromJson(certificateJson))
        .toList();
    return CertificatesResponse(certificates: certificates);
  }
}
