export const forceReloadDecorator = (storyFn: any, context: any) => {
    if (context.globals.shouldReload) {
      context.globals.shouldReload = false;
      window.location.reload();
    }
    context.globals.shouldReload = true;
    return storyFn();
  };

export const clearLocalStorageDecorator = (storyFn: any) => {
    localStorage.clear();
    return storyFn();
}