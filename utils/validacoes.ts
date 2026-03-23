/**
 * Valida se um IP está no formato correto (ex: 192.168.1.1)
 */
export const validarIp = (ip: string): boolean => {
  const regex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (!regex.test(ip)) return false;
  return ip.split('.').every(n => {
    const num = parseInt(n);
    return num >= 0 && num <= 255;
  });
};

/**
 * Valida se a porta está no intervalo válido (1-65535)
 */
export const validarPorta = (porta: string): boolean => {
  const num = parseInt(porta);
  return !isNaN(num) && num >= 1 && num <= 65535;
};

/**
 * Faz uma requisição fetch com timeout
 */
export const fetchComTimeout = async (
  url: string,
  options?: RequestInit,
  timeoutMs: number = 5000
): Promise<Response> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    return response;
  } catch (error) {
    if ((error as any).name === 'AbortError') {
      throw new Error('Servidor não respondeu a tempo');
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};
