export default function hostnameRename(options) {
    return {
      name: 'my-hostname-plugin',
      transformIndexHtml(html) {
        // Modify asset URLs in HTML
        const modifiedHtml = html.replace(
          /(<link[^>]*href=["'])([^"']+)/g,
          `$1${options.hostname}$2`
        ).replace(
          /(<script[^>]*src=["'])([^"']+)/g,
          `$1${options.hostname}$2`
        ).replace(
          /(<img[^>]*src=["'])([^"']+)/g,
          `$1${options.hostname}$2`
        );
        
        return modifiedHtml;
      }
    };
  }