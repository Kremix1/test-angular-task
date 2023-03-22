import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class ValidateDataService {
  constructor() {

  }
  validateData(myForm: FormGroup) {
    // Валидация данных карты
    if((isNaN(Number(myForm.controls['sendCard'].value.join('')))
        || myForm.controls['sendCard'].value.join('').trim() === ''
      || myForm.controls['sendCard'].value.join('').length !== 16)
      || (isNaN(Number(myForm.controls['receiveCard'].value.join('')))
        || myForm.controls['receiveCard'].value.join('').trim() === ''
        || myForm.controls['receiveCard'].value.join('').length !== 16)){
      alert('Данные карты должны состоять только из чисел (4 числа в каждом поле) и обязательны к заполнению')
      return false;
    }
    // Валидация имени владельца
    else if(!/^[a-z\s]+$/i.test(myForm.controls['ownerName'].value) || myForm.controls['ownerName'].value === ''){
      alert('Имя владельца карты состоит из латинских букв и обязательно к заполнению')
      return false
    }
    // Валидация даты карты
    else if(myForm.controls['cardYear'].value === null || myForm.controls['cardMonth'].value === null){
      alert('Заполните дату действия карты')
      return false
    }

    // Валидация суммы
    else if(isNaN(Number(myForm.controls['amountMoney'].value)) || myForm.controls['amountMoney'].value === null){
      alert('Введите корректную сумму')
      return false;
    }
    return true;
  }
}
