// Define el número de teléfono y el mensaje
var phoneNumber = "tel:1234567890"
var message = "Hello World!"

// Crea una nueva instancia de Intent
var intent = new Intent();

// Configura el tipo de Intent como "vnd.android-dir/mms-sms"
intent.setType("vnd.android-dir/mms-sms");

// Agrega el número de teléfono y el mensaje al Intent
intent.putExtra("address", phoneNumber);
intent.putExtra("sms_body", message);

// Inicia el Intent
startActivity(intent);
