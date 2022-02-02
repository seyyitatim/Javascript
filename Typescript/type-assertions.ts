let message; // any olarak tanımlandı.

message = "Hello World"; 

let count = message.length; // burada intellisense çalışmaz.

count = (<string>message).length;
count = (message as string).length;

