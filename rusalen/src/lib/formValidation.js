export const VALIDATION_MESSAGES = {
  name: 'Введите имя: минимум 2 буквы (кириллица или латиница)',
  email: 'Введите корректный email, например name@mail.ru',
  phone: 'Введите российский номер, например +7 (999) 123-45-67',
  message: 'Сообщение должно содержать минимум 10 символов',
  service: 'Выберите тип услуги',
  inn: 'ИНН должен содержать 10 или 12 цифр',
  lotNumber: 'Номер лота может содержать только цифры',
};

export function isValidName(name) {
  const value = name?.trim() ?? '';
  return value.length >= 2 && /^[\p{L}\s'-]+$/u.test(value);
}

export function isValidEmail(email) {
  const value = email?.trim() ?? '';
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

export function isValidRuPhone(phone) {
  const digits = String(phone ?? '').replace(/\D/g, '');
  if (digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
    return /^[78][3-9]\d{9}$/.test(digits);
  }
  if (digits.length === 10) {
    return /^[3-9]\d{9}$/.test(digits);
  }
  return false;
}

export function normalizeRuPhone(phone) {
  const digits = String(phone ?? '').replace(/\D/g, '');
  if (digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
    return `+7${digits.slice(1)}`;
  }
  if (digits.length === 10) {
    return `+7${digits}`;
  }
  return phone?.trim() ?? '';
}

export function isValidMessage(message, minLength = 10) {
  return (message?.trim() ?? '').length >= minLength;
}

export function isValidInn(inn) {
  const digits = String(inn ?? '').replace(/\D/g, '');
  return digits.length === 10 || digits.length === 12;
}

export function isValidLotNumber(value) {
  const trimmed = value?.trim() ?? '';
  if (!trimmed) return true;
  return /^\d+$/.test(trimmed);
}

export function validateLeadFields({
  name,
  email,
  phone,
  nameRequired = true,
  emailRequired = true,
  phoneRequired = true,
}) {
  const errors = {};

  if (nameRequired && !isValidName(name)) {
    errors.name = VALIDATION_MESSAGES.name;
  }
  if (emailRequired && !isValidEmail(email)) {
    errors.email = VALIDATION_MESSAGES.email;
  } else if (!emailRequired && email?.trim() && !isValidEmail(email)) {
    errors.email = VALIDATION_MESSAGES.email;
  }
  if (phoneRequired && !isValidRuPhone(phone)) {
    errors.phone = VALIDATION_MESSAGES.phone;
  } else if (!phoneRequired && phone?.trim() && !isValidRuPhone(phone)) {
    errors.phone = VALIDATION_MESSAGES.phone;
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
