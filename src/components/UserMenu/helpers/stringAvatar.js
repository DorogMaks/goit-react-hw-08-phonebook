export function stringAvatar(name) {
  if (name.includes(' ')) {
    const splittedName = name.split(' ');
    return {
      children:
        splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase(),
    };
  }

  return { children: name.substring(0, 2).toUpperCase() };
}
