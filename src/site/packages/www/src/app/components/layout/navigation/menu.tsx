export const Menu = (props: { className?: string, lang: string, labels: any }) => {
    return (
      <nav className={props.className + " flex justify-items-center gap-8 "}>
        <a href={`/${props.lang}/products`}>{props.labels.navigation.products}</a>
        <a href={`/${props.lang}/about`}>{props.labels.navigation.about}</a>
      </nav>
    )
  }