export const changeColorCategory = (letra: string): string => {

    switch (letra) {
      case 'A':
        return '#c70039';
      case 'B':
        return '#eadb7a';
      case 'C':
        return '#307a33';
      case 'D':
        return '#3940b0';
      case 'E':
        return '#60009b';
      default:
        return '#1c1c1e'; 
    }
  }