0 0 0 1 0 0 0 1 , 0 x 1  
  
 ;   I r q A r b P r i o r i t y U n d e f i n e d   ( 0 )   -   n o   i n t e r r u p t   p r i o r i t y   p o l i c y .  
 ;   I r q A r b P r i o r i t y L o w   ( 1 )   -   d e v i c e   c a n   t o l e r a t e   l o w   I R Q L  
 ;   I r q A r b P r i o r i t y N o r m a l   ( 2 )   -   d e v i c e   e x p e c t s   n o r m a l   i n t e r r u p t   l a t e n c i e s  
 ;   I r q A r b P r i o r i t y H i g h   ( 3 )   -   d e v i c e   r e q u i r e s   t h e   l o w e s t   p o s s i b l e   i n t e r r u p t   l a t e n c y  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ A f f i n i t y   P o l i c y " , D e v i c e P r i o r i t y , 0 x 0 0 0 1 0 0 0 1 , 0 x 3  
  
 ; - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
 ;   H W     V F   d e p r e c a t e d   p a r a m e t e r s  
 ;  
  
 [ M L X 4 B U S _ V F . H w R e g ]  
 ;   u p p e r   f i l t e r s  
 H K R , , " U p p e r F i l t e r s " , 0 x 0 0 0 1 0 0 0 0 , " i b b u s " , " n d f l t r " , " W i n V e r b s " , " W i n M a d " 	 ;   e n a b l e   I B B U S / A L ,   w i n v e r b s   a n d   w i n m a d   F i l t e r   d r i v e r   l o a d i n g .  
  
 ;   M S I - X   s u p p o r t  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ M e s s a g e S i g n a l e d I n t e r r u p t P r o p e r t i e s " , M S I S u p p o r t e d , 0 x 0 0 0 1 0 0 0 1 , 1  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ A f f i n i t y   P o l i c y " , A s s i g n m e n t S e t O v e r r i d e , 0 x 0 0 0 0 0 0 0 1 , 0 x 0  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ A f f i n i t y   P o l i c y " , D e v i c e P o l i c y , 0 x 0 0 0 1 0 0 0 1 , 0 x 5  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ A f f i n i t y   P o l i c y " , G r o u p P o l i c y , 0 x 0 0 0 1 0 0 0 1 , 0 x 1  
 H K R , " I n t e r r u p t   M a n a g e m e n t \ A f f i n i t y   P o l i c y " , D e v i c e P r i o r i t y , 0 x 0 0 0 1 0 0 0 1 , 0 x 3  
  
 [ M L X 4 B U S . D D I n s t a l l . n t a m d 6 4 ]  
 C o p y F i l e s   =   S Y S . C o p y F i l e s  
 A d d R e g         =   M L X 4 B U S . S o f t w a r e R e g  
  
 [ M L X 4 B U S . D D I n s t a l l . n t a m d 6 4 . S e r v i c e s ]  
 A d d S e r v i c e   =   m l x 4 _ b u s , % S P S V C I N S T _ A S S O C S E R V I C E % , M L X 4 B U S . S e r v i c e I n s t a l l , M L X 4 B U S . E v e n t L o g  
 A d d S e r v i c e   =   i b b u s , , I b b u s . S e r v i c e I n s t a l l , I B B U S . E v e n t L o g  
 A d d S e r v i c e   =   n d f l t r , , n d f l t r . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n V e r b s , , W i n V e r b s . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n M a d , , W i n M a d . S e r v i c e I n s t a l l  
  
  
 [ M L X 4 B U S _ V F . D D I n s t a l l . n t a m d 6 4 ]  
 C o p y F i l e s   =   S Y S . C o p y F i l e s  
 A d d R e g         =   M L X 4 B U S . S o f t w a r e R e g  
  
 [ M L X 4 B U S _ V F . D D I n s t a l l . n t a m d 6 4 . S e r v i c e s ]  
 A d d S e r v i c e   =   m l x 4 _ b u s , % S P S V C I N S T _ A S S O C S E R V I C E % , M L X 4 B U S . S e r v i c e I n s t a l l , M L X 4 B U S . E v e n t L o g  
 A d d S e r v i c e   =   i b b u s , , I b b u s . S e r v i c e I n s t a l l , I B B U S . E v e n t L o g  
 A d d S e r v i c e   =   n d f l t r , , n d f l t r . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n V e r b s , , W i n V e r b s . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n M a d , , W i n M a d . S e r v i c e I n s t a l l  
  
  
 [ M L X 4 B U S _ E x t e n d e d H W I D . D D I n s t a l l . n t a m d 6 4 ]  
 C o p y F i l e s   =   S Y S . C o p y F i l e s  
 A d d R e g         =   M L X 4 B U S . S o f t w a r e R e g , M L X 4 B U S _ E x t e n d e d H W I D . s o f t w a r e R e g  
  
 [ M L X 4 B U S _ E x t e n d e d H W I D . D D I n s t a l l . n t a m d 6 4 . S e r v i c e s ]  
 A d d S e r v i c e   =   m l x 4 _ b u s , % S P S V C I N S T _ A S S O C S E R V I C E % , M L X 4 B U S . S e r v i c e I n s t a l l , M L X 4 B U S . E v e n t L o g  
 A d d S e r v i c e   =   i b b u s , , I b b u s . S e r v i c e I n s t a l l , I B B U S . E v e n t L o g  
 A d d S e r v i c e   =   n d f l t r , , n d f l t r . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n V e r b s , , W i n V e r b s . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n M a d , , W i n M a d . S e r v i c e I n s t a l l  
  
  
  
 [ M L X 4 B U S _ E x t e n d e d H W I D _ V F . D D I n s t a l l . n t a m d 6 4 ]  
 C o p y F i l e s   =   S Y S . C o p y F i l e s  
 A d d R e g         =   M L X 4 B U S . S o f t w a r e R e g , M L X 4 B U S _ E x t e n d e d H W I D . s o f t w a r e R e g  
  
 [ M L X 4 B U S _ E x t e n d e d H W I D _ V F . D D I n s t a l l . n t a m d 6 4 . S e r v i c e s ]  
 A d d S e r v i c e   =   m l x 4 _ b u s , % S P S V C I N S T _ A S S O C S E R V I C E % , M L X 4 B U S . S e r v i c e I n s t a l l , M L X 4 B U S . E v e n t L o g  
 A d d S e r v i c e   =   i b b u s , , I b b u s . S e r v i c e I n s t a l l , I B B U S . E v e n t L o g  
 A d d S e r v i c e   =   n d f l t r , , n d f l t r . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n V e r b s , , W i n V e r b s . S e r v i c e I n s t a l l  
 A d d S e r v i c e   =   W i n M a d , , W i n M a d . S e r v i c e I n s t a l l  
  
  
  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   F i l e   C o p y  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ S Y S . C o p y F i l e s ]  
 m l x 4 _ b u s . s y s  
 i b b u s . s y s  
 w i n v e r b s . s y s  
 w i n m a d . s y s  
 n d f l t r . s y s  
  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   S e r v i c e   I n s t a l l   s e c t i o n  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ M L X 4 B U S . S e r v i c e I n s t a l l ]  
 D i s p l a y N a m e           =   % M L X 4 B U S . S e r v i c e D e s c %  
 S e r v i c e T y p e           =   % S E R V I C E _ K E R N E L _ D R I V E R %  
 S t a r t T y p e               =   % S E R V I C E _ D E M A N D _ S T A R T %  
 E r r o r C o n t r o l         =   % S E R V I C E _ E R R O R _ N O R M A L %  
 S e r v i c e B i n a r y       =   % 1 2 % \ m l x 4 _ b u s . s y s  
 L o a d O r d e r G r o u p     =   N D I S  
 A d d R e g                     =   M L X 4 B U S . P a r a m s R e g  
 A d d R e g 	 	 	 =   B o o t F l a g s . P a r a m s R e g  
  
  
 [ M L X 4 B U S . E v e n t L o g ]  
 A d d R e g   =   M L X 4 B U S . A d d E v e n t L o g R e g  
  
 [ M L X 4 B U S . A d d E v e n t L o g R e g ]  
 H K R ,   ,   E v e n t M e s s a g e F i l e ,   0 x 0 0 0 2 0 0 0 0 ,   " % % S y s t e m R o o t % % \ S y s t e m 3 2 \ d r i v e r s \ m l x 4 _ b u s . s y s ; % % S y s t e m R o o t % % \ S y s t e m 3 2 \ I o L o g M s g . d l l "  
 H K R ,   ,   T y p e s S u p p o r t e d ,       0 x 0 0 0 1 0 0 0 1 ,   7  
  
 [ M L X 4 B U S . S o f t w a r e R e g ]  
 H K R , " P a r a m e t e r s " , " C a p a b i l i t y F l a g " , % R E G _ D W O R D % , 0 x 0 0 0 0 0 0 0 0  
 H K R , " P a r a m e t e r s " , " A c c e p t G R E b y O u t e r M A C _ P 1 " , % R E G _ D W O R D % , 0  
 H K R , " P a r a m e t e r s " , " A c c e p t G R E b y O u t e r M A C _ P 2 " , % R E G _ D W O R D % , 0  
 H K R , " P a r a m e t e r s " , " U s e E x t e n d e d H w i d I P o I B " , % R E G _ D W O R D % , 0 x 0 0 0 0 0 0 0 0  
 H K R , " P a r a m e t e r s " , " U s e E x t e n d e d H w i d E T H " , % R E G _ D W O R D % , 0 x 0 0 0 0 0 0 0 0  
  
  
  
  
  
  
  
 [ M L X 4 B U S . P a r a m s R e g ]  
 H K R , , D e v i c e C h a r a c t e r i s t i c s , 0 x 1 0 0 0 1 , 0 x 0 1 0 0                   ;   U s e   s a m e   s e c u r i t y   c h e c k s   o n   r e l a t i v e   o p e n s  
 H K R , , S e c u r i t y , , " D : P ( A ; ; G A ; ; ; B A ) ( A ; ; G A ; ; ; S Y ) "             ;   A l l o w   g e n e r i c - a l l   a c c e s s   t o   B u i l t - i n   a d m i n i s t r a t o r s   a n d   L o c a l   s y s t e m  
 H K R , " P a r a m e t e r s " , " D e v i c e M a n a g e d S t e e r i n g " , % R E G _ D W O R D % , 1  
  
 ;   F l e x 1 0  
  
  
  
  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ G l o b a l L o g g e r \ E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F " , " F l a g s " , % R E G _ D W O R D % , 0 x f f f f  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ G l o b a l L o g g e r \ E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F " , " L e v e l " , % R E G _ D W O R D % , 0 x 3  
  
 ;   P a r a m e t e r s   f o r   A u t o   T r a c i n g   s e s s i o n  
 ;   T r a c e   p a r a m e t e r s  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " B u f f e r S i z e " , % R E G _ D W O R D % , 0 x 2 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " F l u s h T i m e r " , % R E G _ D W O R D % , 3 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " M a x i m u m B u f f e r s " , % R E G _ D W O R D % , 0 x 6 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " M i n i m u m B u f f e r s " , % R E G _ D W O R D % , 0 x 4 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " S t a r t " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " C l o c k T y p e " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " M a x F i l e S i z e " , % R E G _ D W O R D % , 0 x 1 f 4  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " L o g F i l e M o d e " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " G u i d " , % R E G _ S Z % , " { 2 A A A D 0 9 A - 7 2 D 6 - 4 F B D - B 1 B F - 8 1 7 4 7 D 0 F 9 5 A 0 } "  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " F i l e N a m e " , % R E G _ S Z % , " % % S y s t e m R o o t % % \ s y s t e m 3 2 \ L o g F i l e s \ M l n x \ M e l l a n o x - S y s t e m . e t l "  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " F i l e M a x " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l " , " F i l e C o u n t e r " , % R E G _ D W O R D % , 0 x 1  
  
 ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;  
 ;  
 ;   K E R N E L   C O M P O N E N T S  
 ;  
 ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;  
  
 ;   P r o v i d e r s :   { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F }   G e n e r a l   T r a c e  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 9 4 5 6 0 A 8 - E 0 6 0 - 4 8 F 3 - B 2 B 5 - F 5 4 3 E 5 3 4 B 9 E F } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E }   d e f e r r e d   s t a r t u p  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B F 3 4 4 0 A 2 - 0 8 3 0 - 4 4 8 1 - A 7 B B - 7 B F E 6 A A 5 1 D D E } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 }   i b b u s  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C D E 9 C 8 5 9 - A 7 D 6 - 4 3 9 E - A 8 A C - 6 9 8 F 9 2 7 6 1 D 1 0 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F }   m l x 4 _ b u s  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { E 5 1 B B 6 E 2 - 9 1 4 A - 4 e 2 1 - 9 3 C 0 - 1 9 2 F 4 8 0 1 B B F F } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 }   n d f l t r  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 7 7 0 7 8 7 6 a - 2 f f 7 - 4 8 0 8 - a e 7 4 - 4 5 3 E d 6 2 8 3 6 f 5 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 }   i b b u s / I B A L  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 9 d c 8 4 e 3 - b 1 0 6 - 4 3 1 e - 8 8 a 6 - 4 d d 2 0 c 9 b b d e 3 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B }   i b b u s / I B A L 4  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 5 D 6 3 D 3 7 F - E 4 0 0 - 4 4 5 5 - A 9 0 2 - 1 F D A B E 7 4 A 9 A B } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 }   G e n U t i l s  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 6 8 4 E 0 6 8 C - 3 F D C - 4 b c e - 8 9 C 3 - C D B 7 7 A 8 B 7 5 A 4 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 }   H C A  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F 8 C 9 6 A 4 9 - A E 2 2 - 4 1 e 9 - 8 0 2 5 - D 7 E 4 1 6 8 8 4 D 8 9 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A }   N D K  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 3 F 9 B C 7 3 D - E B 0 3 - 4 5 3 a - B 2 7 B - 2 0 F 9 A 6 6 4 2 1 1 A } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 }   I P o I B  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { b f 8 3 b 7 3 c - c c 3 c - 4 3 4 2 - a 2 b a - b b 3 8 e a d 7 b b 5 2 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 }   E t h e r n e t  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 2 a 2 1 9 7 1 8 - 1 3 7 3 - 1 1 d c - 8 3 1 4 - 0 8 0 0 2 0 0 c 9 a 6 6 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 }   M U X  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { c b 0 b 8 8 e c - f b 2 8 - 4 b 5 0 - 8 7 c d - 8 8 5 c 9 b a e 5 8 d 4 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E }   L 2 W  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 8 3 7 9 3 E C 3 - E 8 A 3 - 4 8 0 1 - B E C F - 5 E 9 2 1 F 7 9 F 0 6 E } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e }   P D  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 9 3 c 5 d 6 5 1 - d e 7 e - 4 4 9 c - 9 8 0 1 - 8 1 c 1 8 c 1 d 3 d c e } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D }   C O M P L I B  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { F B 5 1 9 A 7 D - 8 8 6 F - 4 A 9 D - A 6 3 F - 2 8 A 3 4 A 6 D 4 6 9 D } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
  
 ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;  
 ;  
 ;   U S E R   C O M P O N E N T S  
 ;  
 ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ; ;  
  
 ;   P r o v i d e r s :   { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 }   I B A L   u s e r 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { B 1 9 9 C E 5 5 - F 8 B F - 4 1 4 7 - B 1 1 9 - D A C D 1 E 5 9 8 7 A 6 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B }   I B A L   u s e r 3  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C 6 6 F 5 F 7 2 - D F 1 0 - 4 5 B B - 9 4 8 E - 5 4 8 2 C 5 5 1 C D 2 B } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 }   N D   P r o v i d e r  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { f e c 8 6 5 7 6 - 9 d 3 c - 4 e 0 0 - 8 0 a b - 2 c 4 a b d b f b c 8 6 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 }   H C A  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { 1 7 5 2 F 0 7 C - 7 E 5 C - 4 0 2 c - 9 C 5 F - A D 2 1 E 5 7 2 F 8 5 2 } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
 ;   P r o v i d e r s :   { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D }   C O M P L I B   u s e r  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " E n a b l e d " , % R E G _ D W O R D % , 0 x 1  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " E n a b l e L e v e l " , % R E G _ D W O R D % , 0 x 2  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " E n a b l e P r o p e r t y " , % R E G _ D W O R D % , 0 x 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " M a t c h A l l K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " M a t c h A n y K e y w o r d " , 0 x 0 0 0 B 0 0 0 1 , 0 x f f , 0 x f f , 0 x f f , 0 x 7 f , 0 x 0 0 , 0 x 0 0 , 0 x 0 0 , 0 x 0 0  
 H K L M , " S y s t e m \ C u r r e n t C o n t r o l S e t \ C o n t r o l \ W M I \ A u t o l o g g e r \ M e l l a n o x - K e r n e l \ { C A 7 A 4 C F 7 - 8 B 0 C - 4 C 4 D - 9 6 C 3 - 5 0 5 B 8 3 6 0 E B 2 D } " , " S t a t u s " , % R E G _ D W O R D % , 0 x 0  
  
  
  
  
  
  
 [ M L X 4 B U S _ E x t e n d e d H W I D . S o f t w a r e R e g ]  
 H K R , " P a r a m e t e r s " , " U s e E x t e n d e d H w i d I P o I B " , % R E G _ D W O R D % , 0 x 0 0 0 0 0 0 0 1  
 H K R , " P a r a m e t e r s " , " U s e E x t e n d e d H w i d E T H " , % R E G _ D W O R D % , 0 x 0 0 0 0 0 0 0 1  
  
  
  
  
  
  
 [ I b b u s . S e r v i c e I n s t a l l ]  
 D i s p l a y N a m e           =   % I b b u s . S e r v i c e D e s c %  
 S e r v i c e T y p e           =   % S E R V I C E _ K E R N E L _ D R I V E R %  
 S t a r t T y p e               =   % S E R V I C E _ D E M A N D _ S T A R T %  
 E r r o r C o n t r o l         =   % S E R V I C E _ E R R O R _ N O R M A L %  
 S e r v i c e B i n a r y       =   % 1 2 % \ i b b u s . s y s  
 L o a d O r d e r G r o u p     =   P n P   F i l t e r  
 A d d R e g                     =   I b b u s . P a r a m s R e g  
 A d d R e g 	 	 	 =   B o o t F l a g s . P a r a m s R e g  
  
  
 [ I B B U S . E v e n t L o g ]  
 A d d R e g   =   I B B U S . A d d E v e n t L o g R e g  
  
 [ I B B U S . A d d E v e n t L o g R e g ]  
 H K R ,   ,   E v e n t M e s s a g e F i l e ,   0 x 0 0 0 2 0 0 0 0 ,   " % % S y s t e m R o o t % % \ S y s t e m 3 2 \ d r i v e r s \ i b b u s . s y s ; % % S y s t e m R o o t % % \ S y s t e m 3 2 \ I o L o g M s g . d l l "  
 H K R ,   ,   T y p e s S u p p o r t e d ,       0 x 0 0 0 1 0 0 0 1 ,   7  
  
  
 [ I b b u s . P a r a m s R e g ]  
 H K R , " P a r a m e t e r s " , " I b a l D e b u g L e v e l " , % R E G _ D W O R D % , 2  
 H K R , " P a r a m e t e r s " , " I b a l D e b u g F l a g s " , % R E G _ D W O R D % , 0 x f f f f f f f f  
 H K R , " P a r a m e t e r s " , " S m i P o l l I n t e r v a l " , % R E G _ D W O R D % , 2 0 0 0 0  
 H K R , " P a r a m e t e r s " , " I o c Q u e r y T i m e o u t " , % R E G _ D W O R D % , 2 5 0  
 H K R , " P a r a m e t e r s " , " I o c Q u e r y R e t r i e s " , % R E G _ D W O R D % , 4  
 H K R , " P a r a m e t e r s " , " I o c P o l l I n t e r v a l " , % R E G _ D W O R D % , 0  
 H K R , " P a r a m e t e r s " , " D e b u g F l a g s " , % R E G _ D W O R D % , 0 x 8 0 0 0 0 0 0 0  
 H K R , " P a r a m e t e r s " , " R e p o r t P o r t N I C " , % R E G _ D W O R D % , 1  
  
 H K R , " P a r a m e t e r s " , " S t a t i c C h i l d " , % R E G _ M U L T I _ S Z _ N O _ C L O B B E R % , I P o I B  
 ; u s e   t h e   f o l l o w i n g   l i n e   t o   a d d   y o u r   d e v i c e  
 ; H K R , " P a r a m e t e r s " , " S t a t i c C h i l d " , % R E G _ M U L T I _ S Z _ A P P E N D % , " X s i g o B u s "  
  
 H K R , " P a r a m e t e r s \ I P o I B " , " D e v i c e I d " , % R E G _ S Z % , " I B A \ I P o I B "  
 H K R , " P a r a m e t e r s \ I P o I B " , " C o m p a t i b l e I d " , % R E G _ M U L T I _ S Z % , " I B A \ S I D _ 1 0 0 0 0 6 6 a 0 0 0 2 0 0 0 0 "  
 H K R , " P a r a m e t e r s \ I P o I B " , " H a r d w a r e I d " , % R E G _ M U L T I _ S Z % , " I B A \ I P o I B "  
 H K R , " P a r a m e t e r s \ I P o I B " , " D e s c r i p t i o n " , % R E G _ S Z % , " M e l l a n o x   I P o I B   A d a p t e r "  
 H K R , " P a r a m e t e r s \ I P o I B " , " P a r t i t i o n K e y " , % R E G _ S Z % , " 0 X F F F F - I P o I B "  
  
 H K R , " P a r a m e t e r s \ X s i g o B u s " , " D e v i c e I d " , % R E G _ S Z % , " I B A \ X s i g o B u s "  
 H K R , " P a r a m e t e r s \ X s i g o B u s " , " C o m p a t i b l e I d " , % R E G _ M U L T I _ S Z % , " I B A \ S I D _ 0 0 0 0 0 0 0 0 0 2 1 3 9 7 0 2 "  
 H K R , " P a r a m e t e r s \ X s i g o B u s " , " H a r d w a r e I d " , % R E G _ M U L T I _ S Z % , " I B A \ X s i g o B u s "  
 H K R , " P a r a m e t e r s \ X s i g o B u s " , " D e s c r i p t i o n " , % R E G _ S Z % , " X s i g o   V i r t u a l   B u s "  
 H K R , " P a r a m e t e r s \ X s i g o B u s " , " P a r t i t i o n K e y " , % R E G _ S Z % , " 0 X F F F F - i X s i g o "  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   N D   F i l t e r   D r i v e r   S e r v i c e   I n s t a l l   s e c t i o n  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ n d f l t r . S e r v i c e I n s t a l l ]  
 D i s p l a y N a m e   =   % n d f l t r . S e r v i c e D e s c %  
 S e r v i c e T y p e   =   % S E R V I C E _ K E R N E L _ D R I V E R %  
 S t a r t T y p e   =   % S E R V I C E _ D E M A N D _ S T A R T %  
 E r r o r C o n t r o l   =   % S E R V I C E _ E R R O R _ N O R M A L %  
 S e r v i c e B i n a r y     =   % 1 2 % \ n d f l t r . s y s  
 L o a d O r d e r G r o u p   =   P N P   F i l t e r  
 D e p e n d e n c i e s       =   i b b u s  
 A d d R e g 	 	 	 =   B o o t F l a g s . P a r a m s R e g  
  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   W i n V e r b s   S e r v i c e   I n s t a l l   s e c t i o n  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ W i n V e r b s . S e r v i c e I n s t a l l ]  
 D i s p l a y N a m e   =   % W i n V e r b s . S e r v i c e D e s c %  
 S e r v i c e T y p e   =   % S E R V I C E _ K E R N E L _ D R I V E R %  
 S t a r t T y p e   =   % S E R V I C E _ D E M A N D _ S T A R T %  
 E r r o r C o n t r o l   =   % S E R V I C E _ E R R O R _ N O R M A L %  
 S e r v i c e B i n a r y     =   % 1 2 % \ w i n v e r b s . s y s  
 L o a d O r d e r G r o u p   =   P N P   F i l t e r  
 D e p e n d e n c i e s       =   i b b u s  
 A d d R e g 	 	 	 =   B o o t F l a g s . P a r a m s R e g  
  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   W i n M a d   S e r v i c e   I n s t a l l   s e c t i o n  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ W i n M a d . S e r v i c e I n s t a l l ]  
 D i s p l a y N a m e   =   % W i n M a d . S e r v i c e D e s c %  
 S e r v i c e T y p e   =   % S E R V I C E _ K E R N E L _ D R I V E R %  
 S t a r t T y p e   =   % S E R V I C E _ D E M A N D _ S T A R T %  
 E r r o r C o n t r o l   =   % S E R V I C E _ E R R O R _ N O R M A L %  
 S e r v i c e B i n a r y     =   % 1 2 % \ w i n m a d . s y s  
 L o a d O r d e r G r o u p   =   P N P   F i l t e r  
 D e p e n d e n c i e s       =   w i n v e r b s  
 A d d R e g 	 	 	 =   B o o t F l a g s . P a r a m s R e g  
  
 [ B o o t F l a g s . P a r a m s R e g ]  
 H K R , , B o o t F l a g s , 0 x 0 0 0 1 0 0 0 3 , 0 x 1   ;   C M _ S E R V I C E _ N E T W O R K _ B O O T _ L O A D  
  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
 ;   S t r i n g s  
 ; * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  
  
 [ S t r i n g s ]  
 M S F T   =   " M i c r o s o f t "  
 M T L = " M e l l a n o x   T e c h n o l o g i e s   L t d . "  
 M L X 4 B U S . S e r v i c e D e s c   =   " M e l l a n o x   C o n n e c t X   B u s   E n u m e r a t o r "  
 ;   V P I  
 M T 2 5 4 0 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 5 4 0 8 )   -   P C I e   2 . 0   I B   S D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 5 4 0 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 5 4 0 9 )   -   I B   S D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 5 4 1 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 5 4 1 8 )   -   P C I e   2 . 0   2 . 5 G T / s ,   I B   D D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 5 4 2 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 5 4 2 8 )   -   P C I e   2 . 0   2 . 5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 5 4 1 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 5 4 1 9 )   -   P C I e   2 . 0   2 . 5 G T / s ,   I B   D D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 1 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 1 8 )   -   P C I e   2 . 0   5 G T / s ,   I B   D D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 1 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 1 9 )   -   P C I e   2 . 0   5 G T / s ,   I B   D D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 8 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 8 8 )   -   P C I e   2 . 0   5 G T / s ,   I B   D D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 2 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 2 8 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 2 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 2 9 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 2 6 4 3 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 2 6 4 3 8 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 0 4 0 9 6 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 0 4 0 9 6 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 0 4 0 9 7 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 0 4 0 9 7 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 0 4 0 9 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   V P I   ( M T 0 4 0 9 8 )   -   P C I e   2 . 0   5 G T / s ,   I B   Q D R   /   1 0 G i g E   N e t w o r k   A d a p t e r "  
 M T 0 4 0 9 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X - 3   V P I   ( M T 0 4 0 9 9 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X - 3   V P I   ( M T 0 4 1 0 0 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 1 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 1 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 2 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 2 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X - 3   P R O   V P I   ( M T 0 4 1 0 3 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 4 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X - 3   P R O   V P I   ( M T 0 4 1 0 4 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 5 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 5 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 6 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 6 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 7 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 7 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 8 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 0 9 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 1 0 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 1 0 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 1 1 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 1 1 )   N e t w o r k   A d a p t e r "  
 M T 0 4 1 1 2 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   ( M T 0 4 1 1 2 )   V i r t u a l   N e t w o r k   A d a p t e r "  
 ;   E N  
 M T 2 5 4 4 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 5 4 4 8 )   -   P C I e   2 . 0   2 . 5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 5 4 4 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 5 4 4 9 )   -   P C I e   2 . 0   2 . 5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 5 4 5 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 5 4 5 8 )   -   P C I e   2 . 0   2 . 5 G T / s ,   1 0 G i g E   1 0 G B a s e T   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 4 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 4 8 )   -   P C I e   2 . 0   5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 4 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 4 9 )   -   P C I e   2 . 0   5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 5 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 5 8 )   -   P C I e   2 . 0   5 G T / s ,   1 0 G i g E   1 0 G B a s e T   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 6 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 6 8 )   -   P C I e   2 . 0   5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 6 9 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 6 9 )   -   P C I e   2 . 0   5 G T / s ,   1 0 G i g E   E t h e r n e t   A d a p t e r "  
 M T 2 6 4 7 8 . D e v i c e D e s c = " M e l l a n o x   C o n n e c t X   E N   ( M T 2 6 4 7 8 )   -   P C I e   2 . 0   5 G T / s ,   4 0 G i g E   E t h e r n e t   A d a p t e r "  
  
 ; ; ; ; ;   c a r d s   o f   o t h e r   c o m p a n i e s  
 M T 0 4 1 0 0 _ H P _ M a z e . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 S F P +   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ M e s a . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 F L R - S F P +   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ M a z e . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 S F P +   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ M e s a . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 F L R - S F P +   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ M a z e . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 S F P +   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ M e s a . D e v i c e D e s c   =   " H P   E t h e r n e t   1 0 G   2 - p o r t   5 4 6 F L R - S F P +   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 0 9 9 _ H P _ A t t i t a s h _ 1 8 c d . D e v i c e D e s c   =   " H P   I n f i n i b a n d   Q D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 F L R - Q S F P   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 1 8 c d . D e v i c e D e s c   =   " H P   I n f i n i b a n d   Q D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 F L R - Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 2 2 f 1 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   Q D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + M   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ A t t i t a s h _ 2 2 f 1 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   Q D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + M   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ A t t i t a s h _ 2 2 f 1 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   Q D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + M   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 2 2 f 2 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + M   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ A t t i t a s h _ 2 2 f 2 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + M   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ A t t i t a s h _ 2 2 f 2 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + M   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 2 2 f 3 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ A t t i t a s h _ 2 2 f 3 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + Q S F P   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ A t t i t a s h _ 2 2 f 3 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 2 2 f 4 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ A t t i t a s h _ 2 2 f 4 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ A t t i t a s h _ 2 2 f 5 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b / 4 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 0 _ H P _ A t t i t a s h _ 2 2 f 5 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
 M T 0 4 1 0 3 _ H P _ A t t i t a s h _ 2 2 f 5 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   A d a p t e r "  
 M T 0 4 1 0 4 _ H P _ A t t i t a s h _ 2 2 f 4 . D e v i c e D e s c   =   " H P   I n f i n i B a n d   F D R / E t h e r n e t   1 0 G b   2 - p o r t   5 4 4 + F L R - Q S F P   V i r t u a l   N e t w o r k   A d a p t e r "  
  
 ; A T T O   d e v i c e s   d e s c r e p t i o n  
 M T 0 4 1 0 3 _ A T T O _ N Q 4 1 . D e v i c e D e s c   =   " A T T O   F a s t F r a m e   N Q 4 1   A d a p t e r "  
 M T 0 4 1 0 3 _ A T T O _ N Q 4 2 . D e v i c e D e s c   =   " A T T O   F a s t F r a m e   N Q 4 2   A d a p t e r "  
 M T 0 4 1 0 3 _ A T T O _ N Q 1 1 . D e v i c e D e s c   =   " A T T O   F a s t F r a m e   N Q 1 1   A d a p t e r "  
 M T 0 4 1 0 3 _ A T T O _ N Q 1 2 . D e v i c e D e s c   =   " A T T O   F a s t F r a m e   N Q 1 2   A d a p t e r "  
  
 D i s k I d   =   " M e l l a n o x   M l x 4   B u s   i n s t a l l a t i o n   d i s k "  
 S P S V C I N S T _ N U L L   =   0 x 0  
 S P S V C I N S T _ A S S O C S E R V I C E   =   0 x 0 0 0 0 0 0 0 2  
 S E R V I C E _ K E R N E L _ D R I V E R     =   1  
 S E R V I C E _ B O O T _ S T A R T           =   0  
 S E R V I C E _ D E M A N D _ S T A R T       =   3  
 S E R V I C E _ E R R O R _ N O R M A L       =   1  
 R E G _ D W O R D                             =   0 x 0 0 0 1 0 0 0 1  
 R E G _ S Z                                   =   0 x 0 0 0 0 0 0 0 0  
 I b b u s . S e r v i c e D e s c   =   " M e l l a n o x   I n f i n i B a n d   B u s / A L   ( F i l t e r   D r i v e r ) "  
 n d f l t r . S e r v i c e D e s c   =   " N e t w o r k D i r e c t   S e r v i c e "  
 W i n V e r b s . S e r v i c e D e s c   =   " W i n V e r b s   S e r v i c e "  
 W i n M a d . S e r v i c e D e s c   =   " W i n M a d   S e r v i c e "  
  
 R E G _ D W O R D _ N O _ C L O B B E R       =   0 x 0 0 0 1 0 0 0 3  
 R E G _ M U L T I _ S Z 	               =   0 x 0 0 0 1 0 0 0 0  
  
 R E G _ M U L T I _ S Z _ N O _ C L O B B E R   =   0 x 0 0 0 1 0 0 0 2  
 R E G _ M U L T I _ S Z _ A P P E N D         =   0 x 0 0 0 1 0 0 0 8  
 D I R I D _ S Y S T E M                       =   1 1  
 D I R I D _ D R I V E R S                     =   1 2  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               