--
-- PostgreSQL database dump
--

\restrict FQ3ff8MNpwaE2YtrpAomFh2uz9zrBExBMe2WPztJdmfo9WQNCIFPaaqQHv9THZ5

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: abono; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.abono (
    id_abono integer NOT NULL,
    id_venta integer NOT NULL,
    fecha date DEFAULT CURRENT_DATE NOT NULL,
    monto numeric(10,2) NOT NULL
);


ALTER TABLE public.abono OWNER TO postgres;

--
-- Name: abono_id_abono_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.abono_id_abono_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.abono_id_abono_seq OWNER TO postgres;

--
-- Name: abono_id_abono_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.abono_id_abono_seq OWNED BY public.abono.id_abono;


--
-- Name: base_pintura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.base_pintura (
    id_base integer NOT NULL,
    codigo character varying(20) NOT NULL,
    tipo character varying(50) NOT NULL
);


ALTER TABLE public.base_pintura OWNER TO postgres;

--
-- Name: base_pintura_id_base_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.base_pintura_id_base_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.base_pintura_id_base_seq OWNER TO postgres;

--
-- Name: base_pintura_id_base_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.base_pintura_id_base_seq OWNED BY public.base_pintura.id_base;


--
-- Name: categoria; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria (
    id_categoria integer NOT NULL,
    codigo character varying(20) NOT NULL,
    nombre character varying(100) NOT NULL
);


ALTER TABLE public.categoria OWNER TO postgres;

--
-- Name: categoria_id_categoria_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categoria_id_categoria_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.categoria_id_categoria_seq OWNER TO postgres;

--
-- Name: categoria_id_categoria_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categoria_id_categoria_seq OWNED BY public.categoria.id_categoria;


--
-- Name: cliente; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    cedula character varying(20) NOT NULL,
    limite_credito numeric(10,2) DEFAULT 0,
    nombre character varying(150) DEFAULT 'Sin nombre'::character varying NOT NULL,
    rnc character varying(20),
    telefono character varying(20)
);


ALTER TABLE public.cliente OWNER TO postgres;

--
-- Name: cliente_id_cliente_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cliente_id_cliente_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cliente_id_cliente_seq OWNER TO postgres;

--
-- Name: cliente_id_cliente_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cliente_id_cliente_seq OWNED BY public.cliente.id_cliente;


--
-- Name: colorante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colorante (
    id_colorante integer NOT NULL,
    codigo character varying(20) NOT NULL,
    existencia_onz numeric(10,2) DEFAULT 0 NOT NULL
);


ALTER TABLE public.colorante OWNER TO postgres;

--
-- Name: colorante_id_colorante_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.colorante_id_colorante_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.colorante_id_colorante_seq OWNER TO postgres;

--
-- Name: colorante_id_colorante_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.colorante_id_colorante_seq OWNED BY public.colorante.id_colorante;


--
-- Name: detalle_venta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.detalle_venta (
    id_detalle integer NOT NULL,
    id_venta integer NOT NULL,
    id_producto integer,
    id_formula integer,
    cantidad numeric(10,2) NOT NULL,
    subtotal numeric(10,2) NOT NULL,
    CONSTRAINT chk_detalle_uno_u_otro CHECK ((((id_producto IS NOT NULL) AND (id_formula IS NULL)) OR ((id_producto IS NULL) AND (id_formula IS NOT NULL))))
);


ALTER TABLE public.detalle_venta OWNER TO postgres;

--
-- Name: detalle_venta_id_detalle_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.detalle_venta_id_detalle_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.detalle_venta_id_detalle_seq OWNER TO postgres;

--
-- Name: detalle_venta_id_detalle_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.detalle_venta_id_detalle_seq OWNED BY public.detalle_venta.id_detalle;


--
-- Name: formula_color; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.formula_color (
    id_formula integer NOT NULL,
    id_base integer NOT NULL,
    id_cliente integer,
    codigo_color character varying(20) NOT NULL,
    precio numeric(10,2) DEFAULT 0 NOT NULL
);


ALTER TABLE public.formula_color OWNER TO postgres;

--
-- Name: formula_color_colorante; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.formula_color_colorante (
    id_formula integer NOT NULL,
    id_colorante integer NOT NULL,
    cantidad_onz numeric(10,2) NOT NULL
);


ALTER TABLE public.formula_color_colorante OWNER TO postgres;

--
-- Name: formula_color_id_formula_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.formula_color_id_formula_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.formula_color_id_formula_seq OWNER TO postgres;

--
-- Name: formula_color_id_formula_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.formula_color_id_formula_seq OWNED BY public.formula_color.id_formula;


--
-- Name: producto; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto (
    id_producto integer NOT NULL,
    id_categoria integer NOT NULL,
    codigo character varying(20) NOT NULL,
    precio numeric(10,2) NOT NULL,
    existencia integer DEFAULT 0 NOT NULL,
    nombre character varying(150)
);


ALTER TABLE public.producto OWNER TO postgres;

--
-- Name: producto_id_producto_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.producto_id_producto_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.producto_id_producto_seq OWNER TO postgres;

--
-- Name: producto_id_producto_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.producto_id_producto_seq OWNED BY public.producto.id_producto;


--
-- Name: producto_proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producto_proveedor (
    id_producto integer NOT NULL,
    id_proveedor integer NOT NULL
);


ALTER TABLE public.producto_proveedor OWNER TO postgres;

--
-- Name: proveedor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.proveedor (
    id_proveedor integer NOT NULL,
    rnc character varying(20) NOT NULL,
    nombre character varying(150) NOT NULL
);


ALTER TABLE public.proveedor OWNER TO postgres;

--
-- Name: proveedor_id_proveedor_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.proveedor_id_proveedor_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.proveedor_id_proveedor_seq OWNER TO postgres;

--
-- Name: proveedor_id_proveedor_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.proveedor_id_proveedor_seq OWNED BY public.proveedor.id_proveedor;


--
-- Name: secuencia_ncf; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.secuencia_ncf (
    id_tipo_ncf integer NOT NULL,
    secuencia_actual integer DEFAULT 0 NOT NULL,
    fecha_vencimiento date
);


ALTER TABLE public.secuencia_ncf OWNER TO postgres;

--
-- Name: tipo_ncf; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_ncf (
    id_tipo_ncf integer NOT NULL,
    codigo_tipo character varying(10) NOT NULL,
    descripcion character varying(150)
);


ALTER TABLE public.tipo_ncf OWNER TO postgres;

--
-- Name: tipo_ncf_id_tipo_ncf_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tipo_ncf_id_tipo_ncf_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tipo_ncf_id_tipo_ncf_seq OWNER TO postgres;

--
-- Name: tipo_ncf_id_tipo_ncf_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tipo_ncf_id_tipo_ncf_seq OWNED BY public.tipo_ncf.id_tipo_ncf;


--
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    usuario character varying(50) NOT NULL,
    rol character varying(30) NOT NULL
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_usuario_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_usuario_seq OWNER TO postgres;

--
-- Name: usuario_id_usuario_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_usuario_seq OWNED BY public.usuario.id_usuario;


--
-- Name: venta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venta (
    id_venta integer NOT NULL,
    id_cliente integer NOT NULL,
    id_usuario integer NOT NULL,
    id_tipo_ncf integer NOT NULL,
    ncf character varying(20),
    es_credito boolean DEFAULT false NOT NULL,
    fecha timestamp without time zone DEFAULT now() NOT NULL,
    subtotal numeric(10,2) DEFAULT 0 NOT NULL,
    itbis numeric(10,2) DEFAULT 0 NOT NULL,
    total numeric(10,2) DEFAULT 0 NOT NULL
);


ALTER TABLE public.venta OWNER TO postgres;

--
-- Name: venta_credito; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.venta_credito (
    id_venta integer NOT NULL,
    saldo_pendiente numeric(10,2) NOT NULL,
    estado character varying(20) NOT NULL
);


ALTER TABLE public.venta_credito OWNER TO postgres;

--
-- Name: venta_id_venta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.venta_id_venta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.venta_id_venta_seq OWNER TO postgres;

--
-- Name: venta_id_venta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.venta_id_venta_seq OWNED BY public.venta.id_venta;


--
-- Name: abono id_abono; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.abono ALTER COLUMN id_abono SET DEFAULT nextval('public.abono_id_abono_seq'::regclass);


--
-- Name: base_pintura id_base; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.base_pintura ALTER COLUMN id_base SET DEFAULT nextval('public.base_pintura_id_base_seq'::regclass);


--
-- Name: categoria id_categoria; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria ALTER COLUMN id_categoria SET DEFAULT nextval('public.categoria_id_categoria_seq'::regclass);


--
-- Name: cliente id_cliente; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id_cliente SET DEFAULT nextval('public.cliente_id_cliente_seq'::regclass);


--
-- Name: colorante id_colorante; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colorante ALTER COLUMN id_colorante SET DEFAULT nextval('public.colorante_id_colorante_seq'::regclass);


--
-- Name: detalle_venta id_detalle; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta ALTER COLUMN id_detalle SET DEFAULT nextval('public.detalle_venta_id_detalle_seq'::regclass);


--
-- Name: formula_color id_formula; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color ALTER COLUMN id_formula SET DEFAULT nextval('public.formula_color_id_formula_seq'::regclass);


--
-- Name: producto id_producto; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto ALTER COLUMN id_producto SET DEFAULT nextval('public.producto_id_producto_seq'::regclass);


--
-- Name: proveedor id_proveedor; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor ALTER COLUMN id_proveedor SET DEFAULT nextval('public.proveedor_id_proveedor_seq'::regclass);


--
-- Name: tipo_ncf id_tipo_ncf; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_ncf ALTER COLUMN id_tipo_ncf SET DEFAULT nextval('public.tipo_ncf_id_tipo_ncf_seq'::regclass);


--
-- Name: usuario id_usuario; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id_usuario SET DEFAULT nextval('public.usuario_id_usuario_seq'::regclass);


--
-- Name: venta id_venta; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta ALTER COLUMN id_venta SET DEFAULT nextval('public.venta_id_venta_seq'::regclass);


--
-- Name: abono abono_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.abono
    ADD CONSTRAINT abono_pkey PRIMARY KEY (id_abono);


--
-- Name: base_pintura base_pintura_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.base_pintura
    ADD CONSTRAINT base_pintura_codigo_key UNIQUE (codigo);


--
-- Name: base_pintura base_pintura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.base_pintura
    ADD CONSTRAINT base_pintura_pkey PRIMARY KEY (id_base);


--
-- Name: categoria categoria_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_codigo_key UNIQUE (codigo);


--
-- Name: categoria categoria_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY (id_categoria);


--
-- Name: cliente cliente_cedula_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_cedula_key UNIQUE (cedula);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);


--
-- Name: cliente cliente_rnc_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_rnc_key UNIQUE (rnc);


--
-- Name: cliente cliente_telefono_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_telefono_key UNIQUE (telefono);


--
-- Name: colorante colorante_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colorante
    ADD CONSTRAINT colorante_codigo_key UNIQUE (codigo);


--
-- Name: colorante colorante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colorante
    ADD CONSTRAINT colorante_pkey PRIMARY KEY (id_colorante);


--
-- Name: detalle_venta detalle_venta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_pkey PRIMARY KEY (id_detalle);


--
-- Name: formula_color_colorante formula_color_colorante_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color_colorante
    ADD CONSTRAINT formula_color_colorante_pkey PRIMARY KEY (id_formula, id_colorante);


--
-- Name: formula_color formula_color_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color
    ADD CONSTRAINT formula_color_pkey PRIMARY KEY (id_formula);


--
-- Name: producto producto_codigo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_codigo_key UNIQUE (codigo);


--
-- Name: producto producto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_pkey PRIMARY KEY (id_producto);


--
-- Name: producto_proveedor producto_proveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_proveedor
    ADD CONSTRAINT producto_proveedor_pkey PRIMARY KEY (id_producto, id_proveedor);


--
-- Name: proveedor proveedor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT proveedor_pkey PRIMARY KEY (id_proveedor);


--
-- Name: proveedor proveedor_rnc_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.proveedor
    ADD CONSTRAINT proveedor_rnc_key UNIQUE (rnc);


--
-- Name: secuencia_ncf secuencia_ncf_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.secuencia_ncf
    ADD CONSTRAINT secuencia_ncf_pkey PRIMARY KEY (id_tipo_ncf);


--
-- Name: tipo_ncf tipo_ncf_codigo_tipo_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_ncf
    ADD CONSTRAINT tipo_ncf_codigo_tipo_key UNIQUE (codigo_tipo);


--
-- Name: tipo_ncf tipo_ncf_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_ncf
    ADD CONSTRAINT tipo_ncf_pkey PRIMARY KEY (id_tipo_ncf);


--
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);


--
-- Name: usuario usuario_usuario_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_usuario_key UNIQUE (usuario);


--
-- Name: venta_credito venta_credito_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta_credito
    ADD CONSTRAINT venta_credito_pkey PRIMARY KEY (id_venta);


--
-- Name: venta venta_ncf_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_ncf_key UNIQUE (ncf);


--
-- Name: venta venta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pkey PRIMARY KEY (id_venta);


--
-- Name: abono abono_id_venta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.abono
    ADD CONSTRAINT abono_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.venta_credito(id_venta);


--
-- Name: detalle_venta detalle_venta_id_formula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_id_formula_fkey FOREIGN KEY (id_formula) REFERENCES public.formula_color(id_formula);


--
-- Name: detalle_venta detalle_venta_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.producto(id_producto);


--
-- Name: detalle_venta detalle_venta_id_venta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.detalle_venta
    ADD CONSTRAINT detalle_venta_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.venta(id_venta);


--
-- Name: formula_color_colorante formula_color_colorante_id_colorante_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color_colorante
    ADD CONSTRAINT formula_color_colorante_id_colorante_fkey FOREIGN KEY (id_colorante) REFERENCES public.colorante(id_colorante);


--
-- Name: formula_color_colorante formula_color_colorante_id_formula_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color_colorante
    ADD CONSTRAINT formula_color_colorante_id_formula_fkey FOREIGN KEY (id_formula) REFERENCES public.formula_color(id_formula);


--
-- Name: formula_color formula_color_id_base_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color
    ADD CONSTRAINT formula_color_id_base_fkey FOREIGN KEY (id_base) REFERENCES public.base_pintura(id_base);


--
-- Name: formula_color formula_color_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.formula_color
    ADD CONSTRAINT formula_color_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);


--
-- Name: producto producto_id_categoria_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto
    ADD CONSTRAINT producto_id_categoria_fkey FOREIGN KEY (id_categoria) REFERENCES public.categoria(id_categoria);


--
-- Name: producto_proveedor producto_proveedor_id_producto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_proveedor
    ADD CONSTRAINT producto_proveedor_id_producto_fkey FOREIGN KEY (id_producto) REFERENCES public.producto(id_producto);


--
-- Name: producto_proveedor producto_proveedor_id_proveedor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producto_proveedor
    ADD CONSTRAINT producto_proveedor_id_proveedor_fkey FOREIGN KEY (id_proveedor) REFERENCES public.proveedor(id_proveedor);


--
-- Name: secuencia_ncf secuencia_ncf_id_tipo_ncf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.secuencia_ncf
    ADD CONSTRAINT secuencia_ncf_id_tipo_ncf_fkey FOREIGN KEY (id_tipo_ncf) REFERENCES public.tipo_ncf(id_tipo_ncf);


--
-- Name: venta_credito venta_credito_id_venta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta_credito
    ADD CONSTRAINT venta_credito_id_venta_fkey FOREIGN KEY (id_venta) REFERENCES public.venta(id_venta);


--
-- Name: venta venta_id_cliente_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);


--
-- Name: venta venta_id_tipo_ncf_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_tipo_ncf_fkey FOREIGN KEY (id_tipo_ncf) REFERENCES public.tipo_ncf(id_tipo_ncf);


--
-- Name: venta venta_id_usuario_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_usuario_fkey FOREIGN KEY (id_usuario) REFERENCES public.usuario(id_usuario);


--
-- PostgreSQL database dump complete
--

\unrestrict FQ3ff8MNpwaE2YtrpAomFh2uz9zrBExBMe2WPztJdmfo9WQNCIFPaaqQHv9THZ5

