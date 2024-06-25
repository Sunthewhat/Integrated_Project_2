class CertificateResponse {
  String certificateId;
  int amount;
  DateTime date;
  String companyName;
  String firstname;
  String lastname;
  CertificateResponse({
    required this.certificateId,
    required this.amount,
    required this.date,
    required this.companyName,
    required this.firstname,
    required this.lastname,
  });
  factory CertificateResponse.fromJson(Map<String, dynamic>? json) {
    if (json == null) {
      return CertificateResponse(
        certificateId: '',
        amount: 0,
        date: DateTime.now(),
        companyName: '',
        firstname: '',
        lastname: '',
      );
    }
    return CertificateResponse(
      certificateId: json['certificateId'],
      amount: json['amount'],
      date: DateTime.parse(json['date']),
      companyName: json['companyName'],
      firstname: json['firstname'],
      lastname: json['lastname'],
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
