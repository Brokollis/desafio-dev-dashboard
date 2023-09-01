export default function getMonthNameOfDate(dateString: string) : string{
        const [monthStr, yearStr] = dateString.split('/');
        
        const month = parseInt(monthStr);
        const year = parseInt(yearStr);
        
        if (isNaN(month) || isNaN(year)) {
            throw new Error('Componentes da data devem ser números.');
        }
        
        const date = new Date(year, month - 1);
        
        if (date.getMonth() !== month - 1) {
            throw new Error('Data inválida.');
        }
        
        const monthNames = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        
        return monthNames[date.getMonth()];
    }
    