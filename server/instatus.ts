interface InstatusConfig {
  pageId: string;
}

export class InstatusService {
  private config: InstatusConfig | null = null;

  constructor() {
    this.loadConfig();
  }

  private loadConfig(): void {
    const pageId = process.env.INSTATUS_PAGE_ID;

    if (pageId) {
      this.config = { pageId };
    }
  }

  isConfigured(): boolean {
    return this.config !== null;
  }

  getPageId(): string | null {
    return this.config?.pageId || null;
  }

  getStatusPageUrl(): string | null {
    if (!this.config) {
      return null;
    }
    return `https://${this.config.pageId}.instatus.com`;
  }
}

export const instatusService = new InstatusService();
