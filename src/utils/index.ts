export const classNames = (...classes : string[]) => {
    return classes.filter(Boolean).join(' ')
}

export const isValidUrl = (url: string) => {
      const urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
      
      return urlRegex.test(url);
}

