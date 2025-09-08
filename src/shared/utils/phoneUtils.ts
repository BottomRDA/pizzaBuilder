export const phoneUtils = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (!numbers) return '';

    if (numbers.startsWith('7') || numbers.startsWith('8')) {
        const match = numbers.match(/^([78]?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
        if (!match) return value;

        let formatted = '+7';
        if (match[2]) formatted += ` (${match[2]}`;
        if (match[3]) formatted += `) ${match[3]}`;
        if (match[4]) formatted += `-${match[4]}`;
        if (match[5]) formatted += `-${match[5]}`;

        return formatted;
    }

    return numbers;
};

export const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 11 && (cleanPhone.startsWith('7') || cleanPhone.startsWith('8'));
};
